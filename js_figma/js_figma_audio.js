

let audio = document.getElementById("audio");
let time = document.querySelector(".time");
let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let pauseImg = document.querySelector(".img_pause");
let playImg = document.querySelector(".img_play");

let playlist = [
    'track1.mp3',
];

let track;

window.onload = function () {
    track = 0;
};

pause.addEventListener("click", function() {
    audio.currentTime = 0;
    audio.play();
    pause.classList.add('play');
    pauseImg.style.display = "none";
    playImg.style.display = "block";
     let audioPlay = setInterval(function() {
        let audioTime = Math.round(audio.currentTime);
        let audioLength = Math.round(audio.duration);
        time.style.width = (audioTime * 100) / audioLength + '%';
        audioPlay();
    });

});


    
