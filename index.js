document.getElementById('play-button').addEventListener('click', function() {
    const audio = document.getElementById('background-music');
    audio.play().catch(error => {
        console.log('Autoplay prevented:', error);
    });
    // Hide the button after playing
    this.style.display = 'none';
});