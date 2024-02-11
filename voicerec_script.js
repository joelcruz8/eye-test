const timerBar = document.getElementById('timer-bar');
const letter = document.getElementById('letter');
const micBtn = document.getElementById('btn');
const micGlow = document.getElementById("copulation");
const transcript = '';
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

function asyncTask() {
    return new Promise((resolve, reject) => {
        // Perform asynchronous operation
        setTimeout(() => {
        }, 1000);
    });
}
// normel code
function main(){
   
    counter=0;
    counter_row=0;

    while (true){
        if(start_trial_test){ 
            correct_counter=2;
            start_trial_test=false;
        }
        if(correct_counter>=2){
            ++counter_row;
            for(i=1;i>=3;++i){

            }

        }else{
            if (right_Eye_Check === true) {
                // end html 
                
                break;
            } else {
                right_Eye_Check= true;
                
                break;
            }
        }   
    }
}
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