

let audio = document.getElementById("audio");
let time = document.querySelector(".time");
let pauseImg = document.querySelector(".img_pause");
let playImg = document.querySelector(".img_play");
let volumeLine = document.querySelector(".valume");





pauseImg.addEventListener("click", function() {
audio.currentTime = 0;
audio.play();
pauseImg.style.display = "none";
playImg.style.display = "block";
// audio.Play = setInterval(function() {
// let audioTime = Math.round(audio.currentTime);
// let audioLength = Math.round(audio.duration);
// time.style.width = (audioTime * 100) / audioLength + '%';
    // });
});

playImg.addEventListener("click", function() {
audio.pause();
clearInterval(audio.Play);
pauseImg.style.display = "block";
playImg.style.display = "none";
// audio.Play = setInterval(function() {
// let audioTime = Math.round(audio.currentTime);
// let audioLength = Math.round(audio.duration);
// time.style.width = (audioTime * 100) / audioLength + '%';
//     });
});

//slider 
function outputUpdate(vol) {
    const output = document.getElementById('volume');
    output.value = vol;
    output.style.center = vol - 1 + 'px';
}

// jQuery громкость 
$("#fader").mousemove(function (){
    audio.volume = parseFloat(this.value / 100);
});

    
