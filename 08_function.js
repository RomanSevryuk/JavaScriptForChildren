/*let drawCats = function (howManyTimes) {
    for(i = 0; i < howManyTimes; i++) {
        console.log(i + "=^.^=");
    }
};
console.log(drawCats(50));*/

/*let printMultipleTimes = function (howManyTimes, whatToDraw) {
    for (let i =0; i < howManyTimes; i++) {
        console.log(i + " " + whatToDraw);
    }
};
console.log(printMultipleTimes(5, "=^_^="));*/

/*let double = function(number) {
    return number * 2;
};
console.log(double(5));*/

let pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};
//let randomWords = ["Планета", "Червяк", "Цветок", "Компьютер"];
//(pickRandomWord(randomWords));

let randomBodyParts = ["глаз", "нос", "череп"];
let randomAdjectives = ["вонючая", "унылая", "дурацкая"];
let randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];

/*let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
let randomWord = randomWords[Math.floor(Math.random() * 5)];
*/

let randomString = "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";
console.log(randomString);