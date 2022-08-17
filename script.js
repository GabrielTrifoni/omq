class Song {
    constructor(title, url, length) {
        this.title = title;
        this.url = url;
        this.length = length;
    }
}

var songList = [];

songList.push(new Song("xi - Blue Zenith", "https://www.youtube.com/embed/y2A3hLMWk6M", "256"));
songList.push(new Song("RUMI - Densetsu no Matsuri", "https://www.youtube.com/embed/gBotPWBG5gw", "169"));
songList.push(new Song("Second Moon - Blue Breeze Blow (Pocari Sweat)", "https://www.youtube.com/embed/nlGVBZiuqL8", "35"));
songList.push(new Song("Loki - The Victory Is Ours", "https://www.youtube.com/embed/bKUAYI4Ofkg", "175"));
songList.push(new Song("Red Velvet - Day 1", "https://www.youtube.com/embed/KTaa3Pbv9c0", "206"));
songList.push(new Song("mili - Vitamins (feat. world's end girlfriend)", "https://www.youtube.com/embed/JCzIM9KUiik", "300"));
songList.push(new Song("II-L - SPUTNIK-3", "https://www.youtube.com/embed/6x-t_2aBIb8", "173"));
songList.push(new Song("IOSYS - Miracle Hinacle", "https://www.youtube.com/embed/e_OvCNDWd6A", "199"));
songList.push(new Song("Pastel * Palletes - Baby Sweet Berry Love", "https://www.youtube.com/embed/6WeBp5G2kUU", "244"));
songList.push(new Song("Yorushika - Hachigatsu, Bou, Tsukiakari", "https://www.youtube.com/embed/J6eih31MaQ8", "278"));
songList.push(new Song("Nanahira - Kizuitara Shunkashuutou", "https://www.youtube.com/embed/XRAOSO5m-cY", "295"));
songList.push(new Song("linear ring - enchanted love", "https://www.youtube.com/embed/qE6mruRB1PA", "130"));
songList.push(new Song("Set It Off - Horrible Kids", "https://www.youtube.com/embed/UlECVY129fY", "183"));

var songListTotalLength = songList.length;
var index;
var sample;

function RandomNumber(maxValue) {
    return Math.trunc(Math.random() * maxValue);
}

function FormatURL(url) {
    sample = RandomNumber((songList[index].length - 30));
    return url + "?rel=0&autoplay=1&disablekb=1&start=" + sample;
}

function PlayNewSong() {
    index = RandomNumber(songList.length);
    document.getElementById("showvideo").src = FormatURL(songList[index].url);
    songList.splice(index, 1);
}

function SkipSong() {
    if (songList.length == 0) { // if songList is empty
        document.getElementById("endLbl").hidden = false;
        document.getElementById("skipBtn").hidden = true;
    }
    else if (songList.length == songListTotalLength) { // if it's playing the first song
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
