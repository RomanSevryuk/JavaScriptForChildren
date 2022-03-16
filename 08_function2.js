let pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};

/*let randomBodyParts = ["глаз", "нос", "череп"];
let randomAdjectives = ["вонючая", "унылая", "дурацкая"];
let randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];

let randomString = "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";
console.log(randomString);*/
//////////////////////////
let generateRandomInsult = function () {
    let randomBodyParts = ["глаз", "нос", "череп"];
    let randomAdjectives = ["вонючая", "унылая", "дурацкая"];
    let randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];

    let randomString = "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";

    return randomString;
};
console.log(generateRandomInsult());