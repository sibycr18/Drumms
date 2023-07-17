// Drum sound objects
const kickSound = new Howl({
    src: ['./assets/sounds/kick.wav'],
    html5: true,
    preload: true
});
const closedHatSound = new Howl({
    src: ['../assets/sounds/closedhat.wav'],
    html5: true,
    preload: true
});
const openHatSound = new Howl({
    src: ['./assets/sounds/openhat.wav'],
    html5: true,
    preload: true
});
const snareSound = new Howl({
    src: ['./assets/sounds/snare.wav'],
    html5: true,
    preload: true
});
const cymbalSound = new Howl({
    src: ['./assets/sounds/cymbal.wav'],
    html5: true,
    preload: true
});
const tom1Sound = new Howl({
    src: ['./assets/sounds/tom1.wav'],
    html5: true,
    preload: true
});
const tom2Sound = new Howl({
    src: ['./assets/sounds/tom2.wav'],
    html5: true,
    preload: true
});

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
    sound.play();
}

// Drum pad click event listeners
document.getElementById('kick-pad').addEventListener('click', function() {
    playDrum('kick-pad', kickSound);
    document.getElementById('kick-pad').style.transform = 'scale(1.05)';
    setTimeout(function() {
        document.getElementById('kick-pad').style.transform = 'scale(1)';
    }, 140);
});

document.getElementById('closedhat-pad').addEventListener('click', function() {
    playDrum('closedhat-pad', closedHatSound);
    document.getElementById('closedhat-pad').style.transform = 'scale(1.05)';
    setTimeout(function() {
        document.getElementById('closedhat-pad').style.transform = 'scale(1)';
    }, 140);
});

document.getElementById('openhat-pad').addEventListener('click', function() {
    playDrum('openhat-pad', openHatSound);
    document.getElementById('openhat-pad').style.transform = 'scale(1.05)';
    setTimeout(function() {
        document.getElementById('openhat-pad').style.transform = 'scale(1)';
    }, 140);
});

document.getElementById('snare-pad').addEventListener('click', function() {
    playDrum('snare-pad', snareSound);
    document.getElementById('snare-pad').style.transform = 'scale(1.05)';
    setTimeout(function() {
        document.getElementById('snare-pad').style.transform = 'scale(1)';
    }, 140);
});

document.getElementById('cymbal-pad').addEventListener('click', function() {
    playDrum('cymbal-pad', cymbalSound);
    document.getElementById('cymbal-pad').style.transform = 'scale(1.05)';
    setTimeout(function() {
        document.getElementById('cymbal-pad').style.transform = 'scale(1)';
    }, 140);
});

document.getElementById('tom1-pad').addEventListener('click', function() {
    playDrum('tom1-pad', tom1Sound);
    document.getElementById('tom1-pad').style.transform = 'scale(1.05)';
    setTimeout(function() {
        document.getElementById('tom1-pad').style.transform = 'scale(1)';
    }, 140);
});

document.getElementById('tom2-pad').addEventListener('click', function() {
    playDrum('tom2-pad', tom2Sound);
    document.getElementById('tom2-pad').style.transform = 'scale(1.05)';
    setTimeout(function() {
        document.getElementById('tom2-pad').style.transform = 'scale(1)';
    }, 140);
});

// Keyboard event listeners
document.addEventListener('keydown', function(event) {
    if (event.key === 'a' && !kickKeyIsPressed) {
        kickKeyIsPressed = true;
        playDrum('kick-pad', kickSound);
        document.getElementById('kick-pad').style.transform = 'scale(1.05)';
        setTimeout(function() {
            document.getElementById('kick-pad').style.transform = 'scale(1)';
        }, 140);

    } else if (event.key === 'q' && !closedHatKeyIsPressed) {
        closedHatKeyIsPressed = true;
        playDrum('closedhat-pad', closedHatSound);
        document.getElementById('closedhat-pad').style.transform = 'scale(1.05)';
        setTimeout(function() {
            document.getElementById('closedhat-pad').style.transform = 'scale(1)';
        }, 140);

    } else if (event.key === 'w' && !openHatKeyIsPressed) {
        openHatKeyIsPressed = true;
        playDrum('openhat-pad', openHatSound);
        document.getElementById('openhat-pad').style.transform = 'scale(1.05)';
        setTimeout(function() {
            document.getElementById('openhat-pad').style.transform = 'scale(1)';
        }, 140);

    } else if (event.key === 's' && !snareKeyIsPressed) {
        snareKeyIsPressed = true;
        playDrum('snare-pad', snareSound);
        document.getElementById('snare-pad').style.transform = 'scale(1.05)';
        setTimeout(function() {
            document.getElementById('snare-pad').style.transform = 'scale(1)';
        }, 140);

    } else if (event.key === 'e' && !cymbalKeyIsPressed) {
        cymbalKeyIsPressed = true;
        playDrum('cymbal-pad', cymbalSound);
        document.getElementById('cymbal-pad').style.transform = 'scale(1.05)';
        setTimeout(function() {
            document.getElementById('cymbal-pad').style.transform = 'scale(1)';
        }, 140);

    } else if (event.key === 'd' && !tom1KeyIsPressed) {
        tom1KeyIsPressed = true;
        playDrum('tom1-pad', tom1Sound);
        document.getElementById('tom1-pad').style.transform = 'scale(1.05)';
        setTimeout(function() {
            document.getElementById('tom1-pad').style.transform = 'scale(1)';
        }, 140);

    } else if (event.key === 'f' && !tom2KeyIsPressed) {
        tom2KeyIsPressed = true;
        playDrum('tom2-pad', tom2Sound);
        document.getElementById('tom2-pad').style.transform = 'scale(1.05)';
        setTimeout(function() {
            document.getElementById('tom2-pad').style.transform = 'scale(1)';
        }, 140);
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'a') {
        kickKeyIsPressed = false;
    } else if (event.key === 'q') {
        closedHatKeyIsPressed = false;
    } else if (event.key === 'w') {
        openHatKeyIsPressed = false;
    } else if (event.key === 's') {
        snareKeyIsPressed = false;
    } else if (event.key === 'e') {
        cymbalKeyIsPressed = false;
    } else if (event.key === 'd') {
        tom1KeyIsPressed = false;
    } else if (event.key === 'f') {
        tom2KeyIsPressed = false;
    }
});