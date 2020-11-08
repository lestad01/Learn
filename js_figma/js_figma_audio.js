// "use strict";

let audio = document.getElementById("audio");
let time = document.querySelector(".time");
let play = document.querySelector(".play");
let pause = document.querySelector(".pause");

let playlist = [
    'track1.mp3',
];

let track;

window.onload = function () {
    track = 0;
};

play.addEventListener("click", function() {
    audio.currentTime = 0;
    audio.play();
      audioPlay = setInterval(function() {
        let audioTime = Math.round(audio.currentTime);
        let audioLength = Math.round(audio.duration);
        time.style.width = (audioTime * 100) / audioLength + '%';
    });
});


    



/*header.classList.add("header_scroll");
 header.classList.remove("header_scroll")*/