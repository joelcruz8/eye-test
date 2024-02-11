function ratioMap(){
    // Creating a hashmap using Map
    let ratio={
        10:"20",
        9:"25",
        8:"30",
        7:"40",
        6:"50",
        5:"60",
        4:"70",
        3:"80",
        2:"100",
        1:"200"
    };

    return ratio;
}


function calculateOverallVision( ratio, leftKey, rightKey){
    var ratioL= parseInt(ratio[leftKey]);
    var ratioR= parseInt(ratio[rightKey]);

    if(ratioR>ratioL){
        return "20/"+ratioR;
    }else{
        return "20/"+ratioL;
    }
}
function areEqual(String1, String2){
    return String1.toLowerCase() === String2.toLowerCase()[0];
}


function getRandomChar() {
    // Generate a random integer between 0 and 25
    let randomCharCode = Math.floor(Math.random() * 26);
    
    // Convert the random integer to a character code representing a lowercase letter ('a' to 'z')
    let charCode = randomCharCode + 97; // Adding 97 converts the integer to the character code of 'a'
    
    // Convert the character code to the corresponding character
    let randomChar = String.fromCharCode(charCode);
    
    return randomChar;
}

function first_time(start_trial_test){
    if(start_trial_test){ 
        start_trial_test = false;
        return 3;
    }else{
        return 0;
    }
}

function switch_html(str){
    window.location.href = str;
    window.location.replace(str);
    window.location.reload();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function test() {
    var incorrect_counter = 0;
    var temp_counter = 0;
    var counter_row = 0;
    var randTemp = '';
    
    while (loop){
        temp_counter = first_time(start_trial_test);
    
        if(!(temp_counter === 3 && incorrect_counter >= 2)){
            incorrect_counter = 0;
            ++counter_row;
            for(let i = 0; i < 3; i++){
                randTemp = getRandomChar();
                letter.textContent = randTemp;
                resultDiv.style.display = 'none';
                letterDiv.style.display = 'flex';
                colorBar.classList.remove('color-bar-animation');
                void colorBar.offsetWidth;
                colorBar.classList.add('color-bar-animation');
                await sleep(10000);
                
                if(userInput != null && userInput.toLowerCase() === "dont know"){
                    resultImg.src = './assets/images/xmark.png';
                    resultTxt.textContent = 'Incorrect';
                }
                else{
                    if(userInput === null || !areEqual(randTemp, userInput)){
                        incorrect_counter++;
                        resultImg.src = './assets/images/xmark.png';
                        resultTxt.textContent = 'Incorrect';
                    }
                }

                resultDiv.style.display = 'flex';
                letterDiv.style.display = 'none';
                await sleep(2000);
            }
        }
        else{
            if (right_eye_check === true) {
                switch_html("end.html");
                loop = false;
            } else {
                right_eye_check = true;
                switch_html("righteye.html");
            }
        }   
    }
}



// normel code
const timerBar = document.getElementById('timer-bar');
const colorBar = document.getElementById('color-bar');
const micBtn = document.getElementById('btn');
const micGlow = document.getElementById('copulation');
const resultDiv = document.getElementById('result-div');
const resultImg = document.getElementById('result-img');
const resultTxt = document.getElementById('result-txt');
const letterDiv = document.getElementById('letter-div');
const letter = document.getElementById('letter');
var userInput = '';
var flag = 1;
var start_trial_test = true;
var right_eye_check = false;
var loop = true;

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
            recognition.onresult = function(event) {
                const last = event.results.length - 1;
                userInput = event.results[last][0].transcript;
            }
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

test();