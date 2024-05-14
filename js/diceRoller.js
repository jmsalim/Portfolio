// Creates event listener for button click
const roll = document.getElementById('roll');

// Counts the number of times the dice has been rolled
let count = 0;
let result = 0; // Define result in the global scope

// Array to keep track of counts for each dice result
let resultsCount = [0, 0, 0, 0, 0, 0];

// function to roll the dice
function rollDice() {
    // Hides all dice faces
    for (let i = 1; i <= 6; i++) {
        document.getElementById("dice" + i).style.display = "none";
    }
    // Generates a random number between 1 and 6
    result = Math.floor(Math.random() * 6) + 1; // update the global result variable
    // Depending on the result, an image of the dice face will have its display changed to block that is the same as the dice roll
    resultsCount[result - 1]++; // Increment the count for the specific result
    console.log("dice" + result);
    count++;
    document.getElementById("dice" + result).style.display = "block";
    console.log("You have rolled the dice " + count + " times.");
    updateCount(); // Update the count on the screen
}

// Creates function to populate p tag with count id with the number of times the dice has been rolled and the result of the dice roll
function updateCount() {
    const countElement = document.getElementById('count');
    const resultsElement = document.getElementById('diceResults');
    countElement.textContent = "You have rolled a " + result + " and," + " you have rolled the dice " + count + " times.";
    let text = "Roll results: ";
    // Append each result's count to the text
    resultsCount.forEach((value, index) => {
        text += `Number ${index + 1} was rolled: ${value} times; `;
    });
    resultsElement.textContent = text;
}

// Adds event listener to button
roll.addEventListener('click', function() {
    console.log('Button was clicked!');
    rollDice();
});
