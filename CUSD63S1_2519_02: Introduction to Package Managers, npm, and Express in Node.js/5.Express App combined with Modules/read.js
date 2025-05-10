// read.js

const fs = require('fs');

function readFile() {
  try {
    const data = fs.readFileSync('Data.txt', 'utf8');  
    return data;
  } catch (err) {
    return 'Error reading the file: ' + err.message;
  }
}

module.exports = {
  readFile,
};
