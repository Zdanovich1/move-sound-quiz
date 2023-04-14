let varAudio = document.querySelector('.var-music');
let variantPlayBtn = document.querySelector('.var-play-btn');
let variantPauseBtn = document.querySelector('.var-pause-btn');
let variantMute = document.querySelector('.var-volume-btn');
let variantVolume = document.querySelector('.var-mute-btn');
let variantProgress = document.querySelector('#var-time-range')
let variantVolumeRange = document.querySelector('#var-volume-range');

function variantPlay() {
   let variantAudio = document.querySelector('.var-music');
   variantAudio.play();
   variantPlayBtn.classList.toggle('inactive');
   variantPauseBtn.classList.toggle('inactive');
}

function variantPauseAudio() {
   let variantAudio = document.querySelector('.var-music');
   variantAudio.pause();
   variantPlayBtn.classList.toggle('inactive');
   variantPauseBtn.classList.toggle('inactive');
}

function variantProgressUpdate() {
   let variantAudio = document.querySelector('.var-music');
   let variantDuration = variantAudio.duration;
   let variantCurrent = variantAudio.currentTime;
   let variantValueRange = (100 * variantCurrent) / variantDuration;
   variantProgress.value = variantValueRange;
   let variantBack = document.getElementById('var-time-range');
   variantBack.style.backgroundSize = `${Math.ceil(variantValueRange)}% 100%`;
}

function variantVolumeUpdate() {
   let variantAudio = document.querySelector('.var-music');
   let varVol = variantAudio.volume;
   let variantVolumeValue = document.getElementById('var-volume-range');
   variantVolumeValue.style.backgroundSize = `${varVol * 100}% 100%`
}

function variantAudioVolume() {
   let variantAudio = document.querySelector('.var-music');
   let variantV = this.value;
   variantAudio.volume = variantV / 100;
   if (variantAudio.volume === 0) {
      variantVolumeChange()
   } else if (variantAudio.volume !== 0) {
      variantMute.classList.remove('inactive');
      variantVolume.classList.add('inactive');
   }
}

function variantVolumeChange() {
   variantMute.classList.toggle('inactive');
   variantVolume.classList.toggle('inactive');
}

function variantSetProgress() {
   let variantAudio = document.querySelector('.var-music');
   variantAudio.currentTime = (variantProgress.value * variantAudio.duration) / 100;
}

variantProgress.addEventListener('change', variantSetProgress)
variantMute.addEventListener('click', function () {
   let variantAudio = document.querySelector('.var-music');
   variantVolumeChange();
   variantAudio.volume = 0;
});

variantVolume.addEventListener('click', function () {
   let variantAudio = document.querySelector('.var-music');
   variantVolumeChange();
   variantAudio.volume = 0.4;
});

variantVolumeRange.addEventListener('input', variantAudioVolume);
variantVolumeRange.addEventListener('input', variantVolumeUpdate);
variantPlayBtn.addEventListener('click', variantPlay);
variantPlayBtn.addEventListener('click', function () {
   let variantAudio = document.querySelector('.var-music');
   variantAudio.ontimeupdate = variantProgressUpdate;
});
variantPauseBtn.addEventListener('click', variantPauseAudio);