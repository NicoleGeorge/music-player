const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// SONG TITLES
const tracks = ['happy', 'falling', 'willow', 'dancing on my own', 'just a girl', 'hit me baby', 'frozen', 'did it again', 'edge of seventeen', 'the kill']

// INDEXING TRACKS
let trackIndex = 2;

// LOAD TRACK DETAILS INTO DOM
loadTrack(tracks[trackIndex]);

// UPDATE TRACK DETAILS
function loadTrack(track) {
  title.innerText = track;
  audio.src = `music/${track}.mp3`;
  cover.src = `images/${track}.jpg`;
}

// PLAY TRACK FUNCTION INTO
function playTrack() {
  musicContainer.classList.add('play')
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause')

  audio.play();
}
// PAUSE TRACK FUNCTION

function pauseTrack() {
  musicContainer.classList.remove('play')
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause')

  audio.pause();
}

// PREVIOUS TRACK FUNCTION

function prevTrack() {
  trackIndex--;

  if(trackIndex < 0 ) {
    trackIndex = tracks.length -1;
  } 

  loadTrack(tracks[trackIndex])

  playTrack();
}

// NEXT TRACK FUNCTION

function nextTrack() {
  trackIndex++;

  if(trackIndex > tracks.length -1 ) {
    trackIndex = 0;
  } 

  loadTrack(tracks[trackIndex])

  playTrack();
}

// PROGRESS BAR FUNCTION 

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercentage = (currentTime / duration) * 100;
  progress.style.width = `${progressPercentage}%`
}

// SET PROGRESS BAR FUNCTION

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

// EVENT LISTENERS - PLAY, NEXR & PREV BUTTONS

playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play')

  if(isPlaying) {
    pauseTrack()
  } else {
    playTrack()
  }
})

// CHANGE TRACK EVEN LISTENERS

prevBtn.addEventListener('click', prevTrack)
nextBtn.addEventListener('click', nextTrack)

// TRACK PROGRESS UPDATE
audio.addEventListener('timeupdate', updateProgress)

// PROGRESS BAR PERCENTAGE DISPLAY LISTENERS
progressContainer.addEventListener('click', setProgress);

// TRACK FINISHES

audio.addEventListener('ended', nextTrack)