//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// Function to stop all sounds
function stopSounds() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    });
}

// Function to play a specific sound
function playSound(sound) {
    stopSounds();
    document.getElementById(sound).play();
}

// Add event listeners to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        playSound(button.getAttribute('data-sound'));
    });
});

// Add event listener to stop button
document.querySelector('.stop').addEventListener('click', stopSounds);

// Dynamically create audio elements
sounds.forEach(sound => {
    const audio = document.createElement('audio');
    audio.id = sound;
    audio.src = sounds/${sound}.mp3;
    document.body.appendChild(audio);
});
