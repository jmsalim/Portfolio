// Creates event listener for button click
const calculate = document.getElementById('calculate');

var cost = 0;

// Sets the price of milk based on input
function definePrice() {
    cost = document.getElementById("milkPrice").value;
    document.getElementById("display").innerHTML = "The price of milk is " + cost + " dollars.";
}

// extract milk value from input

function calculateCost() {
    var milk = document.getElementById("milk").value;
    alert(cost + " is the current price.")
    var calc = cost * milk;
    document.getElementById("display").innerHTML = milk + " bottles of milk costs " + calc + " dollars.";
}

// Adds event listener to button Set Price
setPrice.addEventListener('click', function() {
    console.log('Button was clicked!');
    definePrice();
});

// Adds event listener to button Calculate!
calculate.addEventListener('click', function() {
    console.log('Button was clicked!');
    calculateCost();
});

