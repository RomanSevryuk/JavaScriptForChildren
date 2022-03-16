let words = ["программа", "макака", "прекрасный", "оладушек"];
let word = words[Math.floor(Math.random () * words.length)];
let answerArray = [];

for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;
let attempts = word.length * 2;

while ((remainingLetters > 0) && (attempts > 0)) {
    alert("Слово состоит из " + word.length + " букв  (" + answerArray.join(" ") + ")." + " У тебя " + attempts + " попытки(ок).");
    let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите только одну букву.");
    } else {
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
            
            attempts --;
            alert(answerArray.join(" "));
            alert("Осталость " + attempts + " попытки(ок).")                            
        } 
}

alert("Отлично! Было загадано слово " + word);