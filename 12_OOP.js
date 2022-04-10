/*let dog = {
    name: "Оладушек",
    legs: 4,
    isAwesome: true
   };

dog.bark = function () {
    console.log("Гав-гав! Меня зовут " + this.name + "!");
};
   dog.bark ();*/

let speak = function () {
    console.log(this.sound + "! Меня зовут " + this.name + "!");
};

let cat = {
    sound: "Мяу",
    name: "Варежка",
    speak: speak
    };
    

let pig = {
    sound: "Хрю",
    name: "Чарли",
    speak: speak
};

var horse = {
    sound: "И-го-го",
    name: "Мэри",
    speak: speak
   };

pig.speak();
horse.speak();
cat.speak();
