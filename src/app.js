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

// Keyboard event listeners
document.addEventListener('keydown', function(event) {
    const key = event.key
    if (key === 'a') {
        kickSound.play();

    } else if (key === 'q') {
        closedHatSound.play();

    } else if (key === 'w') {
        openHatSound.play();

    } else if (key === 's') {
        snareSound.play();

    } else if (key === 'e') {
        cymbalSound.play();

    } else if (key === 'd') {
        tom1Sound.play();

    } else if (key === 'f') {
        tom2Sound.play();
    }
});