let fifthLetter = function(name) {
    if (name.lenght < 5) {
        return;
    }
    return "Пятая буква вашего имени: " + name[4] + "."
}
console.log(fifthLetter("Nik"));
///////////////////

let medalForScore = function (score) {
    if (score < 3) {
        return "Бронзовая";
    }
    if (score < 7) {
        return "Серебряная";
    }
    return "Золотая";
};
/////////
//v.1
let double = function (number) {
    return number * 2;
};
//v.2
function double (number) {
    return number * 2;
}