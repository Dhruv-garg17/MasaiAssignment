const chalk = require('chalk');

console.log(chalk.blue('Hello, World!')); // Blue text
console.log(chalk.yellow('Learning Chalk is fun!')); // Yellow text

console.log(chalk.black.bgYellow('Warning! Proceed with caution.')); // Black text on Yellow background
console.log(chalk.white.bgRed('Error! Something went wrong.')); // White text on Red background

console.log(chalk.green('Success: ') + chalk.white('Operation completed!')); // Green Success and White text
console.log(chalk.cyan('Loading... ') + chalk.magenta('Please wait')); // Cyan Loading and Magenta text

const errorTheme = chalk.bold.red; // Bold red for Error
const warningTheme = chalk.bold.rgb(255, 165, 0); // Bold orange for Warning
const successTheme = chalk.bold.green; // Bold green for Success

console.log(errorTheme('Error: Unable to connect to the server!'));
console.log(warningTheme('Warning: Low disk space!'));
console.log(successTheme('Success: Data saved successfully!'));

console.log(chalk.underline('This is an underlined text!'));
console.log(chalk.italic('This is an italic text!'));
console.log(chalk.strikethrough('This is a strikethrough text!'));

console.log(chalk.rgb(255, 99, 71)('This is a tomato red color!')); // Using RGB
console.log(chalk.hex('#ff6347')('This is a tomato red color in HEX!')); // Using HEX
