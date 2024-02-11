const timerBar = document.getElementById('timer-bar');
const letter = document.getElementById('letter');
const micBtn = document.getElementById('btn');
const micGlow = document.getElementById("copulation");
const transcript = '';
var flag = 1;

// Check if the browser supports Speech Recognition
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.continuous = true;
    recognition.lang = 'en-US';

    micBtn.addEventListener('click', function() {
        if (flag == 1) {
            micGlow.classList.remove('normal-white');
            micGlow.classList.add('big-green');
            recognition.start();
            flag = 0;
        }
        else {
            micGlow.classList.remove('big-green');
            micGlow.classList.add('normal-white');
            recognition.stop();
            flag = 1;
        }
    });
}
else {
    timerBar.style.display = 'none';
    micBtn.style.display = 'none';
    letter.style.fontFamily = 'Exo 2, sans-serif';
    letter.textContent = 'Speech recognition not available';
}