////////////
let pickWord = function () {
    let words = ["программа", "макака", "прекрасный", "оладушек"];
    let word = words[Math.floor(Math.random () * words.length)];
return word;
}
/////////////
let setupAnswerArray = function (word) {
    let answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
return answerArray;
}
/////////////
let showPlayerProgress = function (answerArray) {
    alert("Слово состоит из " + answerArray.length + " букв  (" + answerArray.join(" ") + ").");
}
////////////
let getGuess = function () {
    let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
    return guess;
}
///////////
let updateGameState = function (guess, word, answerArray, remainingLetters) {
    for (let j = 0; j < word.length; j++) 
        if (answerArray[j] === "_") {
            if  (word[j] === guess.toLowerCase()) {
                answerArray[j] = guess.toLowerCase();
                remainingLetters --;
            }          
            } else if (answerArray[j] === guess) {
                alert("Буква уже угадана!");
                break;                
            }
            
            return remainingLetters;
        }
        
//////////   
let showAnswerAndCongratulatePlayer = function (answerArray) {
alert("Отлично! Было загадано слово " + word + " Поздравляю!!!");
}
//-----------------------//
let word = pickWord();
let answerArray = setupAnswerArray(word);
let remainingLetters = word.length;
while (remainingLetters > 0) {
   showPlayerProgress (answerArray);
   let guess = getGuess();
   if (guess === null) {
    break;
} else if (guess.length !== 1) {
    alert("Пожалуйста, введите только одну букву.");
} else {
    let correctGuesses = updateGameState(guess, word, answerArray, remainingLetters);       
    remainingLetters = correctGuesses;       
}
}
showAnswerAndCongratulatePlayer(answerArray);