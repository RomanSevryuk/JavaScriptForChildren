let fifthLetter = function(name) {
    if (name.lenght < 5) {
        return;
    }
    return "Пятая буква вашего имени: " + name[4] + "."
}
console.log(fifthLetter("Nik"));