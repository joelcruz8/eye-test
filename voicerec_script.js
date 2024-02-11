const timerBar = document.getElementById('timer-bar');
const letter = document.getElementById('letter');
const micBtn = document.getElementById('btn');
const micGlow = document.getElementById("copulation");
const resultImg = document.getElementById('result-img');
const resultTxt = document.getElementById('result-txt');
const resultDiv = document.getElementById('result-div');
const letterDiv = document.getElementById('letter-div');
var userInput="";
var flag = 1;
var start_trial_test = true;
var right_Eye_Check=false;


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
    ratioL= parseInt(ratio[leftKey]);
    ratioR= parseInt(ratio[rightKey]);

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
// normel code
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
var counter=0;
var counter_row=0;
var correct_counter=0;

function first_time(){
    if(start_trial_test){ 
        correct_counter=3;
        start_trial_test=false;
    }
}

function test_per_row(){
    for(i=1;i>=3;++i){
        randTemp=getRandomChar();
        letter.textContent = randTemp;
        resultDiv.style.display = 'none';
        letterDiv.style.display = 'flex';
        setTimeout( 10000);
        if(userInput.toLowerCase()==="dont know"){
            resultImg.src = './assets/images/xmark.png';
            resultTxt.textContent = 'Incorrect';
        }else{
            if(areEqual(randTemp, userInput)){
                ++correct_counter;
            }
            else{
                resultImg.src = './assets/images/xmark.png';
                resultTxt.textContent = 'Incorrect';
            }
        }
        resultDiv.style.display = 'flex';
        letterDiv.style.display = 'none';
        setTimeout( 200);
        
    }
}

function switch_to_screen(str){
    window.location.href=str;
    window.location.replace(str);
    window.location.reload();
}
while (true){
    
    first_time();

    if(correct_counter>=2){
        ++counter_row;
        test_per_row();

    }else{
        // if (right_Eye_Check === true) {
        //     switch_to_screen("end.html");
        //     break;
        // } else {
        //     right_Eye_Check= true;
        //    switch_to_screen("righteye.html");
        //     break;
        // }
    }   
}

