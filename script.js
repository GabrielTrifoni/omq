var request = new XMLHttpRequest();
request.open("GET", "../data/songs.json", false);
request.send(null)
var songsRequest = JSON.parse(request.responseText);

var songList = songsRequest.Songs;
var songListTotalLength = songList.length;
var index;
var sample;

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
    songList.splice(index, 1);
}

function SkipSong() {
    if (songList.length === 0) { // if songList is empty
        document.getElementById("endLbl").hidden = false;
        document.getElementById("skipBtn").hidden = true;
    }
    else if (songList.length === songListTotalLength) { // if it's playing the first song
        PlayNewSong();
        document.getElementById("startBtn").hidden = true;
        document.getElementById("skipBtn").hidden = false;
        document.getElementById("showvideo").width = 683;
        document.getElementById("showvideo").height = 384;
    }
    else {
        PlayNewSong();
    }
}
