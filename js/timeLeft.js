// Defines days, weeks and months in a year as variables globally

var days = 365;
var weeks = 52;
var months = 12;
var howOld = 0;
var ageLimit = 0;
var currentAge = 0;

// Calculates the time left in days, weeks and months based on input of age
function calculateTimeLeft() {
    var currentAge = document.getElementById("age").value; // User's current age

   
        var yearsDifference = howOld - currentAge;
        var timeLeftDays = yearsDifference * days;
        var timeLeftWeeks = yearsDifference * weeks;
        var timeLeftMonths = yearsDifference * months;

        document.getElementById("display").innerHTML = "You have " + timeLeftDays + " days, " 
            + timeLeftWeeks + " weeks, and " + timeLeftMonths + " months left until you are " 
            + howOld + " years old.";
   
}


// Creates function to set age based on input
function defineAge() {
    howOld = document.getElementById("ageLimit").value; // Assume this is the input where you set the future age limit
    document.getElementById("setAge").innerHTML = howOld; // Update the span with the new age
    document.getElementById("display").innerHTML = "Future age set to " + howOld + " years.";
}



// Creates event listener for Set Age button click
set.addEventListener('click', function() {
    console.log('Button was clicked!');
    defineAge();
});

// Creates event listener for Calculate! button click
calculate.addEventListener('click', function() {
    console.log('Button was clicked!');
    calculateTimeLeft();
});
