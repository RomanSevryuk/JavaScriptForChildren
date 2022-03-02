// only for Google Ghrome 
// version 1
let firstLetterUp = "эЙ, кАК деЛА?";
firstLetterUp[0].toUpperCase() + firstLetterUp.slice(1).toLowerCase();

// version 2
let firstLetterUp = "эЙ, кАК деЛА?";
let firstLetter = firstLetterUp [0];
firstLetter = firstLetter.toUpperCase();
let allNextLetters = firstLetterUp.slice(1);
allNextLetters = allNextLetters.toLowerCase();
firstLetterUp = firstLetter + allNextLetters;
console.log(firstLetterUp);