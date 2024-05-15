var output = []
var size = 0;

// Creates function to push values in output array that matches the conditions of the game FizzBuzz
function fizzBuzz() {
    // deletes text from previous game
    output = [];
    //Loop to check if the number is divisible by 3, 5 or both
    for (let i = 1; i <= size; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output.push('FizzBuzz');
        } else if (i % 3 === 0) {
            output.push('Fizz');
        } else if (i % 5 === 0) {
            output.push('Buzz');
        } else {
            output.push(i);
        }
    }
    console.log(output);
    document.getElementById('output').innerHTML = output;
}

// Creates function to decide how big the array will be
function defineSize() {
    size = document.getElementById("fizzBuzzGo").value;
    document.getElementById("output").innerHTML = "The array will have " + size + " elements.";
}

// Creates event listener for button click
defineNumber.addEventListener('click', function() {
    console.log('Button was clicked!');
    defineSize();
});

// Creates event listener for button click 
go.addEventListener('click', function() {
    console.log('Button was clicked!');
    fizzBuzz();
});
