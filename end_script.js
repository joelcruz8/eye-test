function ratioMap(row_count){
    // Creating a hashmap using Map
    let ratio = {
        10: "20",
        9: "25",
        8: "30",
        7: "40",
        6: "50",
        5: "60",
        4: "70",
        3: "80",
        2: "100",
        1: "200"
    };

    return '20/' + ratio[row_count];
}

function calculateOverallVision() {
    if(left_rc > right_rc){
        return rightScore;
    }
    else{
        return leftScore;
    }
}

const leftResult = document.getElementById('left_result');
const rightResult = document.getElementById('right_result');
const overallResult = document.getElementById('overall_result');
var left_rc = localStorage.getItem('left_rc');
var right_rc = localStorage.getItem('right_rc');

var leftScore = ratioMap(left_rc);
var rightScore = ratioMap(right_rc);

leftResult.textContent = '' + leftScore;
rightResult.textContent = '' + rightScore;
overallResult.textContent = '' + calculateOverallVision();