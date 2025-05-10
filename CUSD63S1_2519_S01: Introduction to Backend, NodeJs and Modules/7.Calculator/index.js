// index.js


const crypto = require('crypto');

const args = process.argv.slice(2); 
const operation = args[0];

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero.";
    }
    return a / b;
}

function sin(angle) {
    return Math.sin((angle * Math.PI) / 180);
}

function cos(angle) {
    return Math.cos((angle * Math.PI) / 180);
}

function tan(angle) {
    return Math.tan((angle * Math.PI) / 180);
}

function randomNumber(length) {
    if (!length) {
        console.log("Provide length for random number generation.");
        return;
    }
    const randomBytes = crypto.randomBytes(Number(length));
    console.log(randomBytes.toString('binary'));
}

switch (operation) {
    case "add":
    case "sub":
    case "mult":
    case "divide": {
        const num1 = Number(args[1]);
        const num2 = Number(args[2]);

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Please provide two valid numbers.");
            break;
        }

        let result;
        if (operation === "add") result = add(num1, num2);
        if (operation === "sub") result = sub(num1, num2);
        if (operation === "mult") result = mult(num1, num2);
        if (operation === "divide") result = divide(num1, num2);

        console.log(result);
        break;
    }

    case "sin":
    case "cos":
    case "tan": {
        const angle = Number(args[1]);

        if (isNaN(angle)) {
            console.log("Please provide a valid angle in degrees.");
            break;
        }

        let result;
        if (operation === "sin") result = sin(angle);
        if (operation === "cos") result = cos(angle);
        if (operation === "tan") result = tan(angle);

        console.log(result);
        break;
    }

    case "random": {
        const length = args[1];  // Optional
        randomNumber(length);
        break;
    }

    default:
        console.log("Invalid operation");
}
