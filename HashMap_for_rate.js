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



