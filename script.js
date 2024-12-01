// Credits Pop-Up
const creditsButton = document.getElementById('credits-button');
const creditsPopup = document.getElementById('credits-popup');
const exitPopup = document.getElementById('exit-popup');

// Show credits pop-up
creditsButton.addEventListener('click', () => {
    creditsPopup.classList.remove('hidden');
});

// Hide credits pop-up
exitPopup.addEventListener('click', () => {
    creditsPopup.classList.add('hidden');
});