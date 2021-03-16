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
const tracks = ['happy', 'falling', 'willow']

// INDEXING TRACKS
let trackIndex = 0;

// LOAD TRACK DETAILS INTO DOM
loadTrack(tracks[trackIndex]);

// UPDATE TRACK DETAILS
function loadTrack(track) {
  title.innerText = track;
  audio.src = `music/${track}.mp3`;
  cover.src = `images/${track}.jpg`;
}