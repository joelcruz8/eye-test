function ratioMap(row_count){
    // Creating a hashmap using Map
    let ratio = {
        11: "10",
        10: "13",
        9: "15",
        8: "20",
        7: "25",
        6: "30",
        5: "40",
        4: "50",
        3: "70",
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