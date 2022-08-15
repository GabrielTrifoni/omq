document.getElementById("skipBtn").hidden = true;
document.getElementById("endLbl").hidden = true;

class Song {
    constructor(title, url, length) {
        this.title = title;
        this.url = url;
        this.length = length;
    }
}

var songList = [];
var generatedNumbers = [];

songList.push(new Song("xi - Blue Zenith", "https://www.youtube.com/embed/y2A3hLMWk6M?rel=0&autoplay=1", "256"));
songList.push(new Song("RUMI - Densetsu no Matsuri", "https://www.youtube.com/embed/gBotPWBG5gw?rel=0&autoplay=1", "169"));
songList.push(new Song("Second Moon - Blue Breeze Blow (Pocari Sweat)", "https://www.youtube.com/embed/nlGVBZiuqL8?rel=0&autoplay=1", "169"));
songList.push(new Song("Loki - The Victory Is Ours", "https://www.youtube.com/embed/bKUAYI4Ofkg?rel=0&autoplay=1", "169"));
songList.push(new Song("Red Velvet - Day 1", "https://www.youtube.com/embed/KTaa3Pbv9c0?rel=0&autoplay=1", "169"));
songList.push(new Song("mili - Vitamins (feat. world's end girlfriend)", "https://www.youtube.com/embed/JCzIM9KUiik?rel=0&autoplay=1", "169"));
songList.push(new Song("II-L - SPUTNIK-3", "https://www.youtube.com/embed/6x-t_2aBIb8?rel=0&autoplay=1", "169"));
songList.push(new Song("IOSYS - Miracle Hinacle", "https://www.youtube.com/embed/e_OvCNDWd6A?rel=0&autoplay=1", "169"));
songList.push(new Song("Pastel * Palletes - Baby Sweet Berry Love", "https://www.youtube.com/embed/6WeBp5G2kUU?rel=0&autoplay=1", "169"));
songList.push(new Song("Yorushika - Hachigatsu, Bou, Tsukiakari", "https://www.youtube.com/embed/J6eih31MaQ8?rel=0&autoplay=1", "169"));
songList.push(new Song("Nanahira - Kizuitara Shunkashuutou", "https://www.youtube.com/embed/XRAOSO5m-cY?rel=0&autoplay=1", "169"));
songList.push(new Song("linear ring - enchanted love", "https://www.youtube.com/embed/qE6mruRB1PA?rel=0&autoplay=1", "169"));

function StartGame() {
    SkipSong();
    document.getElementById("startBtn").hidden = true;
    document.getElementById("skipBtn").hidden = false;

}

var bool;
var n;
var sample;

function SkipSong() {
    if (songList.length > generatedNumbers.length) {
        while (true) {
            n = Math.trunc(Math.random() * songList.length);
            bool = false;

            for (let i = 0; i < generatedNumbers.length; i++) {
                if (n == generatedNumbers[i]) {
                    bool = true;
                    break;
                }
            }

            if (bool == false) {
                generatedNumbers.push(n);
                sample = Math.trunc(Math.random() * songList[n].length);
                document.getElementById("showvideo").src = (songList[n].url + "&t=" + sample); // (+ "&t=" + sample) doesnt work with youtube's embed  
                break;
            }
        }
    }
    else if (songList.length == generatedNumbers.length) {
        document.getElementById("endLbl").hidden = false;
        document.getElementById("skipBtn").hidden = true;
    }
}


