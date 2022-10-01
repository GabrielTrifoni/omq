var request = new XMLHttpRequest();
request.open("GET", "../data/songs.json", false);
request.send(null)
var songsRequest = JSON.parse(request.responseText);

var songList = songsRequest.Songs;
var dataList = document.getElementById('songs-datalist');

songList.forEach(function (song) {
    var option = document.createElement('option');
    option.value = (song.artist + " - " + song.title);
    dataList.appendChild(option);
});

var index;
var sample;
var score;
var totalSongsPlayed;

function RandomNumber(maxValue) {
    return Math.trunc(Math.random() * maxValue);
}

function FormatURL(url) {
    sample = RandomNumber((songList[index].length - 30));
    if (sample < 0) sample = 0;
    return "https://www.youtube.com/embed/" + url + "?rel=0&autoplay=1&disablekb=1&start=" + sample;
}

function PlayNewSong() {
    index = RandomNumber(songList.length);
    document.getElementById("showvideo").src = FormatURL(songList[index].videoID);
}

function Start() {
    PlayNewSong();
    score = 0;
    totalSongsPlayed = 0;
    document.getElementById("guessInput").hidden = false;
    document.getElementById("startBtn").hidden = true;
    document.getElementById("guessBtn").hidden = false;
    document.getElementById("score").hidden = false;
    document.getElementById("showvideo").width = 683;
    document.getElementById("showvideo").height = 384;
}

function Guess() {
    let currentSong = (songList[index].artist + " - " + songList[index].title);

    if (songList.length === 1) { // if songList is empty
        document.getElementById("endLbl").hidden = false;
    }

    if (document.getElementById("guessInput").value.length === 0) { // No guess
        alert("No song selected");
    } else if (document.getElementById("guessInput").value === currentSong) { // Right guess
        score++;
    } else { // Wrong guess
        alert("Wrong guess");
    }

    totalSongsPlayed++;
    document.getElementById("score").innerHTML = 'Score: ' + score + '/' + totalSongsPlayed;
    document.getElementById("guessInput").value = "";
    songList.splice(index, 1);
    PlayNewSong();
}