
// Creates event listener for button click
const calculate = document.getElementById('calculate');

// Function to change background color of table data cells according to BMI result
// When BMI is less than 18.5, td pf id 18.5 will change to yellow
function changeColor1() {
    document.getElementById("18.5").style.backgroundColor = "yellow";
}
// When BMI is between 18.5 and 24.9, td of id 24.9 will change to green
function changeColor2() {
    document.getElementById("24.9").style.backgroundColor = "green";
}
// When BMI is between 25 and 29.9, td of id 29.9 will change to orange
function changeColor3() {
    document.getElementById("29.9").style.backgroundColor = "orange";
}
// When BMI is between 30 and 34.9, td of id 34.9 will change to red
function changeColor4() {
    document.getElementById("30").style.backgroundColor = "red";
}
// Clears all background colors of table data cells
function clearColors() {
    document.getElementById("18.5").style.backgroundColor = "#333";
    document.getElementById("24.9").style.backgroundColor = "#333";
    document.getElementById("29.9").style.backgroundColor = "#333";
    document.getElementById("30").style.backgroundColor = "#333";
}

// Creates function to calculate BMI based on input
function calculateBMI() {
    clearColors();
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    // Transforms height from cm to m
    height = height / 100;
    var bmi = weight / (height * height);
    document.getElementById("bmiDisplay").innerHTML = "Your BMI is " + bmi + ".";
    // Reveals id of hide element changing display to block
    document.getElementById("hide").style.display = "block";
    // Calls changeColor functions to change background color of table data cells according to BMI result
    if (bmi < 18.5) {
        changeColor1();
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        changeColor2();
    } else if (bmi >= 25 && bmi <= 29.9) {
        changeColor3();
    } else if (bmi >= 30) {
        changeColor4();
    }
}

// Adds event listener to button
calculate.addEventListener('click', function() {
    console.log('Button was clicked!');
    calculateBMI();
});