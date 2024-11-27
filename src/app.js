// Drum sound objects
const kickSound = new Howl({
    src: ['./assets/sounds/kick.wav'],
    html5: false,
    preload: true
});
const closedHatSound = new Howl({
    src: ['../assets/sounds/closedhat.wav'],
    html5: false,
    preload: true
});
const openHatSound = new Howl({
    src: ['./assets/sounds/openhat.wav'],
    html5: false,
    preload: true
});
const snareSound = new Howl({
    src: ['./assets/sounds/snare.wav'],
    html5: false,
    preload: true
});
const cymbalSound = new Howl({
    src: ['./assets/sounds/cymbal.wav'],
    html5: false,
    preload: true
});
const tom1Sound = new Howl({
    src: ['./assets/sounds/tom1.wav'],
    html5: false,
    preload: true
});
const tom2Sound = new Howl({
    src: ['./assets/sounds/tom2.wav'],
    html5: false,
    preload: true
});

// Volume set to 40%
Howler.volume(0.4);

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
    // Immediate play with minimal overhead
    sound.play();
    
    const pad = document.getElementById(padId);
    pad.style.transform = 'scale(1.05)';
    requestAnimationFrame(() => {
        setTimeout(() => {
            pad.style.transform = 'scale(1)';
        }, 140);
    });
}

// Drumpad click event listeners
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

// Touch event listeners
document.getElementById('kick-pad').addEventListener('touchstart', function(event) {
    event.preventDefault();
    playDrum('kick-pad', kickSound);
});
document.getElementById('closedhat-pad').addEventListener('touchstart', function(event) {
    event.preventDefault();
    playDrum('closedhat-pad', closedHatSound);
});
document.getElementById('openhat-pad').addEventListener('touchstart', function(event) {
    event.preventDefault();
    playDrum('openhat-pad', openHatSound);
});
document.getElementById('snare-pad').addEventListener('touchstart', function(event) {
    event.preventDefault();
    playDrum('snare-pad', snareSound);
});
document.getElementById('cymbal-pad').addEventListener('touchstart', function(event) {
    event.preventDefault();
    playDrum('cymbal-pad', cymbalSound);
});
document.getElementById('tom1-pad').addEventListener('touchstart', function(event) {
    event.preventDefault();
    playDrum('tom1-pad', tom1Sound);
});
document.getElementById('tom2-pad').addEventListener('touchstart', function(event) {
    event.preventDefault();
    playDrum('tom2-pad', tom2Sound);
});

// Keyboard event listeners
document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    if (key === 'a' && !kickKeyIsPressed) {
        kickKeyIsPressed = true;
        playDrum('kick-pad', kickSound);

    } else if (key === 'q' && !closedHatKeyIsPressed) {
        closedHatKeyIsPressed = true;
        playDrum('closedhat-pad', closedHatSound);

    } else if (key === 'w' && !openHatKeyIsPressed) {
        openHatKeyIsPressed = true;
        playDrum('openhat-pad', openHatSound);

    } else if (key === 's' && !snareKeyIsPressed) {
        snareKeyIsPressed = true;
        playDrum('snare-pad', snareSound);

    } else if (key === 'e' && !cymbalKeyIsPressed) {
        cymbalKeyIsPressed = true;
        playDrum('cymbal-pad', cymbalSound);

    } else if (key === 'd' && !tom1KeyIsPressed) {
        tom1KeyIsPressed = true;
        playDrum('tom1-pad', tom1Sound);

    } else if (key === 'f' && !tom2KeyIsPressed) {
        tom2KeyIsPressed = true;
        playDrum('tom2-pad', tom2Sound);
    }
});

// Updating boolean variables to false so that sounds don't repeat playing while holding the keys
document.addEventListener('keyup', function(event) {
    const key = event.key.toLowerCase();
    if (key === 'a') {
        kickKeyIsPressed = false;
    } else if (key === 'q') {
        closedHatKeyIsPressed = false;
    } else if (key === 'w') {
        openHatKeyIsPressed = false;
    } else if (key === 's') {
        snareKeyIsPressed = false;
    } else if (key === 'e') {
        cymbalKeyIsPressed = false;
    } else if (key === 'd') {
        tom1KeyIsPressed = false;
    } else if (key === 'f') {
        tom2KeyIsPressed = false;
    }
});