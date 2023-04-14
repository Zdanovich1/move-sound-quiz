let audio = document.querySelector('.music');
let playBtn = document.querySelector('.play-btn');
let pauseBtn = document.querySelector('.pause-btn');
let mute = document.querySelector('.volume-btn');
let volume = document.querySelector('.mute-btn');
let progress = document.querySelector('#time-range')
let volumeRange = document.querySelector('#volume-range');

function play() {
   let audio = document.querySelector('.music');
   audio.play();
   audio.ontimeupdate = progressUpdate;
   playBtn.classList.toggle('inactive');
   pauseBtn.classList.toggle('inactive');
}

function pauseAudio() {
   let audio = document.querySelector('.music');
   audio.pause();
   playBtn.classList.toggle('inactive');
   pauseBtn.classList.toggle('inactive');
}

function progressUpdate() {
   let audio = document.querySelector('.music');
   let duration = audio.duration;
   let current = audio.currentTime;
   let valueRange = (100 * current) / duration;
   progress.value = valueRange;
   let back = document.getElementById('time-range');
   back.style.backgroundSize = `${Math.ceil(valueRange)}% 100%`;
}

function volumeUpdate() {
   let audio = document.querySelector('.music');
   let vol = audio.volume;
   let volumeValue = document.getElementById('volume-range');
   volumeValue.style.backgroundSize = `${vol * 100}% 100%`
}

function audioVolume() {
   let audio = document.querySelector('.music');
   let v = this.value;
   audio.volume = v / 100;
   if (audio.volume === 0) {
      volumeChange()
   } else if (audio.volume !== 0) {
      mute.classList.remove('inactive');
      volume.classList.add('inactive');
   }
}

function volumeChange() {
   mute.classList.toggle('inactive');
   volume.classList.toggle('inactive');
}

function setProgress() {
   let audio = document.querySelector('.music');
   audio.currentTime = (progress.value * audio.duration) / 100;
}

progress.addEventListener('change', setProgress)
mute.addEventListener('click', function () {
   let audio = document.querySelector('.music');
   volumeChange();
   audio.volume = 0;
})

volume.addEventListener('click', function () {
   let audio = document.querySelector('.music');
   volumeChange();
   audio.volume = 0.4;
})

volumeRange.addEventListener('input', audioVolume);
volumeRange.addEventListener('input', volumeUpdate);
playBtn.addEventListener('click', play);
pauseBtn.addEventListener('click', pauseAudio);

nextLevBtn.addEventListener('click', function () {
   playBtn.classList.remove('inactive');
   pauseBtn.classList.add('inactive');
   progress.style.backgroundSize = `0% 100%`;
   progress.value = 0;
})