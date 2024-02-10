const letter = document.getElementById('letter');
const micBtn = document.getElementById('btn');
const micGlow = document.getElementById("copulation");
console.log(micGlow);
const transcript = '';
var flag = 1;

// Check if the browser supports Speech Recognition
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.continuous = true;
    recognition.lang = 'en-US';

    micBtn.addEventListener('click', function() {
        if (flag == 1) {
            micGlow.classList.remove("normal-white");
            micGlow.classList.add("big-green");
            recognition.start();
            flag = 0;
        }
        else {
            micGlow.classList.remove("big-green");
            micGlow.classList.add("normal-white");
            recognition.stop();
            flag = 1;
        }
    });

    // When speech is recognized
    recognition.onresult = function(event) {
        const last = event.results.length - 1;
        transcript = event.results[last][0].transcript;
    };

    // When speech recognition stops
    recognition.onend = function() {
        if (transcript == letter.textContent) {

        }
        else {

        }
    };

    // When there is an error with speech recognition
    recognition.onerror = function(event) {
    
    };

} 
else {
    micBtn.style.display = 'none';
    letter.textContent = 'Speech recognition not available';
}