// fun.js

function checkPalindrome(word) {
    return word.toLowerCase() === word.split('').reverse().join('').toLowerCase();
}

function countVowels(word) {
    const vowelRegex = /[aeiouAEIOU]/g;
    const matches = word.match(vowelRegex);
    return matches ? matches.length : 0; 
}

module.exports = { checkPalindrome, countVowels };
