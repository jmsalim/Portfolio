
// Creates event listener for button click
const calculateDogAgeButton = document.getElementById('calculate');

// Extracts dog age from id dogAge and calculates human age

function calculateDogAge() {
    var dogAge = document.getElementById("dogAge").value;
    var humanAge = (dogAge - 2) * 4 + 21;
    document.getElementById("display").innerHTML = "Your dog's age is " + humanAge + " in human years.";
}

// Adds event listener to button
calculateDogAgeButton.addEventListener('click', function() {
    console.log('Button was clicked!');
    calculateDogAge();
});

function calculateCost(milk) {

    let cost = 2;
    
    console.log(milk + "a bottle of milk costs" + cost + "dollars")
    

    
}