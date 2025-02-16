
// Number 1 - Selects button from ID
const number1Button = document.getElementById('number1');

// Number 2 - Selects button from ID
const number2Button = document.getElementById('number2');

// Number 3 - Selects button from ID
const number3Button = document.getElementById('number3');

// Number 4 - Selects button from ID
const number4Button = document.getElementById('number4');

// Number 5 - Selects button from ID
const number5Button = document.getElementById('number5');

// Number 6 - Selects button from ID
const number6Button = document.getElementById('number6');

// Number 7 - Selects button from ID
const number7Button = document.getElementById('number7');

// Number 8 - Selects button from ID
const number8Button = document.getElementById('number8');

// Number 9 - Selects button from ID
const number9Button = document.getElementById('number9');

// Number 0 - Selects button from ID
const number0Button = document.getElementById('number0');

// Add - Selects button from ID
const addButton = document.getElementById('add');

// Subtract - Selects button from ID
const subtractButton = document.getElementById('subtract');

// Multiply - Selects button from ID
const multiplyButton = document.getElementById('multiply');

// Divide - Selects button from ID
const divideButton = document.getElementById('divide');

// Equals - Selects button from ID
const equalsButton = document.getElementById('equals');

// Clear - Selects button from ID
const clearButton = document.getElementById('clear');

// Writes the number 1 to the display
function number1() {
    document.getElementById('display').innerText += '1';
}

// Writes the number 2 to the display
function number2() {
    document.getElementById('display').innerText += '2';
}

// Writes the number 3 to the display
function number3() {
    document.getElementById('display').innerText += '3';
}

// Writes the number 4 to the display
function number4() {
    document.getElementById('display').innerText += '4';
}

// Writes the number 5 to the display
function number5() {
    document.getElementById('display').innerText += '5';
}

// Writes the number 6 to the display
function number6() {
    document.getElementById('display').innerText += '6';
}

// Writes the number 7 to the display
function number7() {
    document.getElementById('display').innerText += '7';
}

// Writes the number 8 to the display
function number8() {
    document.getElementById('display').innerText += '8';
}

// Writes the number 9 to the display
function number9() {
    document.getElementById('display').innerText += '9';
}

// Writes the number 0 to the display
function number0() {
    document.getElementById('display').innerText += '0';
}


// Creates a loop to check if + is already in the display
function add() {
    const input = document.getElementById('display').innerText;
    if (input.includes('+')) {
        return;
    }
    document.getElementById('display').innerText += '+';

}

// Creates a loop to check if - is already in the display
function subtract() {
    const input = document.getElementById('display').innerText;
    if (input.includes('-')) {
        return;
    }
    document.getElementById('display').innerText += '-';
}

// Creates a loop to check if x is already in the display
function multiply() {
    const input = document.getElementById('display').innerText;
    if (input.includes('*')) {
        return;
    }
    document.getElementById('display').innerText += '*';
}

// Creates a loop to check if / is already in the display
function divide() {
    const input = document.getElementById('display').innerText;
    if (input.includes('/')) {
        return;
    }
    document.getElementById('display').innerText += '/';
}

// Equal sign to calculate sum, difference, product, or quotient
function equals() {
    const input = document.getElementById('display').innerText;
    if (input.includes('+')) {
        const numbers = input.split('+');
        const sum = parseInt(numbers[0]) + parseInt(numbers[1]);
        document.getElementById('display').innerText = sum;
    } else if (input.includes('-')) {
        const numbers = input.split('-');
        const difference = parseInt(numbers[0]) - parseInt(numbers[1]);
        document.getElementById('display').innerText = difference;
    } else if (input.includes('*')) {
        const numbers = input.split('*');
        const product = parseInt(numbers[0]) * parseInt(numbers[1]);
        document.getElementById('display').innerText = product;
    } else if (input.includes('/')) {
        const numbers = input.split('/');
        const quotient = parseInt(numbers[0]) / parseInt(numbers[1]);
        document.getElementById('display').innerText = quotient;
    }
}

// Clears the display
function clear() {
    document.getElementById('display').innerText = '';
}

// Add click event listeners to the buttons
number1Button.addEventListener('click', function() {
    console.log('Button was clicked!');
    number1();
});

number2Button.addEventListener('click', function() {
    console.log('Button was clicked!');
    number2();
});

number3Button.addEventListener('click', function() {
    console.log('Button was clicked!');
    number3();
});

number4Button.addEventListener('click', function() {
    console.log('Button was clicked!');
    number4();
});

number5Button.addEventListener('click', function() {
    console.log('Button was clicked!');
    number5();
});

number6Button.addEventListener('click', function() {
    console.log('Button was clicked!');
    number6();
});

number7Button.addEventListener('click', function() {
    console.log('Button was clicked!');
    number7();
});

number8Button.addEventListener('click', function() {
    console.log('Button was clicked!');
    number8();
});

number9Button.addEventListener('click', function() {
    console.log('Button was clicked!');
    number9();
});

number0Button.addEventListener('click', function() {
    console.log('Button was clicked!');
    number0();
});

addButton.addEventListener('click', function() {
    console.log('Button was clicked!');
    add();
});

subtractButton.addEventListener('click', function() {
    console.log('Button was clicked!');
    subtract();
});

multiplyButton.addEventListener('click', function() {
    console.log('Button was clicked!');
    multiply();
});

divideButton.addEventListener('click', function() {
    console.log('Button was clicked!');
    divide();
});

equalsButton.addEventListener('click', function() {
    console.log('Button was clicked!');
    equals();
});

clearButton.addEventListener('click', function() {
    console.log('Button was clicked!');
    clear();
});

