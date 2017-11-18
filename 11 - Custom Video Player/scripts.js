// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButton = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build our functions
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
function updateButton() {
  let icon;
  if (video.paused) {
    icon = '►';
  } else if (!video.paused) {
    icon = '❚ ❚';
  }

  console.log(icon);
  toggle.textContent = icon;
}

function skip() {
  console.log('skipping');
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  console.log(this.name);
  console.log(this.value);
}

// Hook up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
