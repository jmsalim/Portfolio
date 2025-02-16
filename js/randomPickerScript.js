var group = [];
var random = 0;

// Creates a function to add a name or number to array, each name or number will be separated by a comma, and then displays the array.
function addToGroup() {
    var content = document.getElementById("group").value;
    // Separaqtes each name or number by a comma, amd adds it individually to the array.
    group = content.split(",");
    console.log(group);
    // Displays the array.
    document.getElementById("array").innerHTML = group;
}

// Adds event listener to the button to run the function when clicked.
document.getElementById("add").addEventListener("click", addToGroup);

// Creates a function to randomly select a name or number from the array and display it.
function randomPicker() {
    random = Math.floor(Math.random() * group.length);
    console.log(random);
    document.getElementById("output").innerHTML = "And the lucky winner is: " + group[random];
}

// Adds event listener to the button to run the function when clicked.
document.getElementById("pull").addEventListener("click", randomPicker);

