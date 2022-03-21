/*let timeUp = function () {
    alert ("Время вышло!");
};
(setTimeout(timeUp, 5000));*/

//***********************

/*let  doHomeworkAlarm = function () {
    alert("Эй, пора делать домашку!");
};

let timeoutID = setTimeout (doHomeworkAlarm, 5000);
clearTimeout(timeoutID);*/

//***********************

let counter = 1;
let printMessage = function () {
    console.log("Ты смотришь в консоль уже " + counter * 5 + "сек")
    counter ++;
};

let intervalId = setInterval(printMessage, 5000);
//clearInterval(intervalId);