// index.js

const randomWords = require('random-words');
const { checkPalindrome, countVowels } = require('./fun');

const words = randomWords({ exactly: 5, maxLength: 8 }); 

words.forEach((word, index) => {
    const vowelsCount = countVowels(word); 
    const isPalindrome = checkPalindrome(word);
    console.log(`word ${index + 1} -> ${word} -> vowelsCount: ${vowelsCount} -> isPalindrome: ${isPalindrome}`);
});
