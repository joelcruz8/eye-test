var startDiv = document.getElementById("startDiv");
var takeTestBtn = document.getElementById("takeTestBtn");

var instructionsDiv = document.getElementById("instrDiv");
var goBackBtn = document.getElementById("goBackBtn");
var understandBtn = document.getElementById("understandBtn");

var testDiv = document.getElementById("testDiv");


takeTestBtn.addEventListener("click", function() {
    // Hide the start button
    startDiv.style.display = "none";
    // Show the test instructions
    instructionsDiv.style.display = "flex";
});

goBackBtn.addEventListener("click", function() {
    // Hide the test instructions
    instructionsDiv.style.display = "none";
    // Show the start button again
    startDiv.style.display = "flex";
});

understandBtn.addEventListener("click", function() {
    // Hide the test instructions
    instructionsDiv.style.display = "none";
    // Show the test
    testDiv.style.display = "flex";
});