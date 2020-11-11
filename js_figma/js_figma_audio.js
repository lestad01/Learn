

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

$('.muted').click(function () {
    audio.muted = !audio.muted;
    return false;
});let volumeDrag = false;
$('.volume').on('mousedown', function (e) {
    volumeDrag = true;
    audio.muted = false;
    $('.sound').removeClass('muted');
    updateVolume(e.pageX);
});
$(document).on('mouseup', function (e) {
    if (volumeDrag) {
        volumeDrag = false;
        updateVolume(e.pageX);
    }
});
$(document).on('mousemove', function (e) {
    if (volumeDrag) {
        updateVolume(e.pageX);
    }
});
let updateVolume = function (x, vol) {
    let volume = $('.volume');
    let percentage;
    //if only volume have specificed
    //then direct update volume
    if (vol) {
        percentage = vol * 100;
    } else {
        let position = x - volume.offset().left;
        percentage = 100 * position / volume.width();
    }

    if (percentage > 100) {
        percentage = 100;
    }
    if (percentage < 0) {
        percentage = 0;
    }

    //update volume bar and video volume
    $('.volumeBar').css('width', percentage + '%');
    audio.volume = percentage / 100;

    //change sound icon based on volume
    if (audio.volume == 0) {
        $('.sound').removeClass('sound2').addClass('muted');
    } else if (audio.volume > 0.5) {
        $('.sound').removeClass('muted').addClass('sound2');
    } else {
        $('.sound').removeClass('muted').removeClass('sound2');
    }
};


    
