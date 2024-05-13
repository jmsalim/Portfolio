
// Capitalize - Select the button by its ID
const capitalizeButton = document.getElementById('capitalize');

function capitalize() {
    const input = document.getElementById('lname').value;
    slice1 = input.slice(0,1);
    slice2 = input.slice(1, input.length);
    const output = slice1.toUpperCase() + slice2;
    document.getElementById('output').innerText = "";
    document.getElementById('output').innerText = output;
}

// Add a click event listener to the button
capitalizeButton.addEventListener('click', function() {
    console.log('Button was clicked!');
    capitalize();
});


// Reverse - Select the button by its ID
const reverseButton = document.getElementById('reverse');

function reverse() {
    const input = document.getElementById('lname1').value;
    const output = input.split('').reverse().join('');
    document.getElementById('output').innerText = "";
    document.getElementById('output').innerText = output;
}

// Add a click event listener to the button
reverseButton.addEventListener('click', function() {
    console.log('Button was clicked!');
    reverse();
});


// Count - Select the button by its ID
const countButton = document.getElementById('countWord');

function count() {
    const input = document.getElementById('lname2').value;
    console.log(input);
    // Regular expression to replace all non-letter characters
    const lettersOnly = input.replace(/[^a-zA-Z]/g, '');
    const output = lettersOnly.length;
    document.getElementById('output').innerText = output;
}

// Add a click event listener to the button
countButton.addEventListener('click', function() {
    console.log('Button was clicked!');
    count();
});


// Slice - Select the button by its ID
const sliceButton = document.getElementById('slice');

function slice() {
    const input = document.getElementById('lname3').value;
    const input2 = document.getElementById('lname4').value;
    const output = input.slice(0, input2);
    document.getElementById('output').innerText = output;
}

// Add a click event listener to the button
sliceButton.addEventListener('click', function() {
    console.log('Button was clicked!');
    slice();
});


