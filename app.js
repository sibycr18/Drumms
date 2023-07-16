// Drum sound objects
const kickSound = new Audio('audio/kick.wav');
const closedHatSound = new Audio('audio/closedhat.wav');
const openHatSound = new Audio('audio/openhat.wav');
const snareSound = new Audio('audio/snare.wav');
const cymbalSound = new Audio('audio/cymbal.wav');
const tom1Sound = new Audio('audio/tom1.wav');
const tom2Sound = new Audio('audio/tom2.wav');

// Define variables to track the key state and animation state
let kickKeyIsPressed = false;
let closedHatKeyIsPressed = false;
let openHatKeyIsPressed = false;
let snareKeyIsPressed = false;
let cymbalKeyIsPressed = false;
let tom1KeyIsPressed = false;
let tom2KeyIsPressed = false;

// Function to play a drum sound and trigger animation
function playDrum(padId, sound) {
    console.log(padId);
  if (!sound.paused) {
    sound.currentTime = 0;
  } else {
    sound.play();
  }
  document.getElementById(padId).classList.add('active');
  setTimeout(function() {
    document.getElementById(padId).classList.remove('active');
  }, 200);
}

// Drum pad click event listeners
document.getElementById('kick-pad').addEventListener('click', function() {
  playDrum('kick-pad', kickSound);
});

document.getElementById('closedhat-pad').addEventListener('click', function() {
  playDrum('closedhat-pad', closedHatSound);
});

document.getElementById('openhat-pad').addEventListener('click', function() {
  playDrum('openhat-pad', openHatSound);
});

document.getElementById('snare-pad').addEventListener('click', function() {
  playDrum('snare-pad', snareSound);
});

document.getElementById('cymbal-pad').addEventListener('click', function() {
  playDrum('cymbal-pad', cymbalSound);
});

document.getElementById('tom1-pad').addEventListener('click', function() {
  playDrum('tom1-pad', tom1Sound);
});

document.getElementById('tom2-pad').addEventListener('click', function() {
  playDrum('tom2-pad', tom2Sound);
});

// Keyboard event listeners
document.addEventListener('keydown', function(event) {
  if (event.key === 'a' && !kickKeyIsPressed) {
    kickKeyIsPressed = true;
    playDrum('kick-pad', kickSound);
  } else if (event.key === 'q' && !closedHatKeyIsPressed) {
    closedHatKeyIsPressed = true;
    playDrum('closedhat-pad', closedHatSound);
  } else if (event.key === 'w' && !openHatKeyIsPressed) {
    openHatKeyIsPressed = true;
    playDrum('openhat-pad', openHatSound);
  } else if (event.key === 's' && !snareKeyIsPressed) {
    snareKeyIsPressed = true;
    playDrum('snare-pad', snareSound);
  } else if (event.key === 'e' && !cymbalKeyIsPressed) {
    cymbalKeyIsPressed = true;
    playDrum('cymbal-pad', cymbalSound);
  } else if (event.key === 'd' && !tom1KeyIsPressed) {
    tom1KeyIsPressed = true;
    playDrum('tom1-pad', tom1Sound);
  } else if (event.key === 'f' && !tom2KeyIsPressed) {
    tom2KeyIsPressed = true;
    playDrum('tom2-pad', tom2Sound);
  }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'a') {
    kickKeyIsPressed = false;
    document.getElementById('kick-pad').classList.remove('active');
    } else if (event.key === 'q') {
    closedHatKeyIsPressed = false;
    document.getElementById('closedhat-pad').classList.remove('active');
    } else if (event.key === 'w') {
    openHatKeyIsPressed = false;
    document.getElementById('openhat-pad').classList.remove('active');
    } else if (event.key === 's') {
    snareKeyIsPressed = false;
    document.getElementById('snare-pad').classList.remove('active');
    } else if (event.key === 'e') {
    cymbalKeyIsPressed = false;
    document.getElementById('cymbal-pad').classList.remove('active');
    } else if (event.key === 'd') {
    tom1KeyIsPressed = false;
    document.getElementById('tom1-pad').classList.remove('active');
    } else if (event.key === 'f') {
    tom2KeyIsPressed = false;
    document.getElementById('tom2-pad').classList.remove('active');
    }
});