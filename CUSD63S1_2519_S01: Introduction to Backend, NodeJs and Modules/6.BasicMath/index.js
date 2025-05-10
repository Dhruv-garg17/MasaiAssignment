// index.js
const sum = require("./sum");
const multiply = require("./multiplication");
const subtract = require("./subtraction");
const divide = require("./division");

const args = process.argv.slice(2);  
const [operation, a, b] = args;
const numA = Number(a);
const numB = Number(b);

switch (operation) {
    case "sum":
        console.log(sum(numA, numB));
        break;
    case "multiply":
        console.log(multiply(numA, numB));
        break;
    case "subtract":
        console.log(subtract(numA, numB));
        break;
    case "divide":
        console.log(divide(numA, numB));
        break;
    default:
        console.log("Unknown operation");
}
