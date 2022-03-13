/*let dino = [
    {name: "Tirranozavr", period: "odin"},
    {name: "Stegozavr", period: "dva"}
];
    console.log(dino[1] ["name"]);
    console.log(dino[0].period);
let anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 6, 8] };
let dave = { name: "Dave", age: 5, luckyNumbers: [3, 5, 7, 9] };
let kate = { name: "Kate", age: 9, luckyNumbers: [1, 11, 16, 88] };

let friends = [anna, dave, kate];

console.log(friends[0].luckyNumbers[0])*/

/*let owedMoney = {};
owedMoney["Jimmi"] = 5;
owedMoney["Anna"] = 7;
owedMoney["Alex"];
console.log(owedMoney.Jimmi);
owedMoney["Jimmi"] += 3;
console.log(owedMoney.Jimmi);
console.log(owedMoney);*/

let movies = {
    "V poiskah nemo": {
        releseDate: 2003,
        duration: 100,
        actors: ["albert", "alen", "alex"],
        format: "DVD"
    },

    "V poiskah nemo2": {
        releseDate: 2004,
        duration: 1001,
        actors: ["albert2", "alen2", "alex2"],
        format: "DVD2"
    },
    "V poiskah nemo3": {
        releseDate: 20033,
        duration: 1003,
        actors: ["albert3", "alen3", "alex3"],
        format: "DVD3"
    },
    
};

let findingNemo = movies["V poiskah nemo"];
console.log(findingNemo.duration, findingNemo.format);

let cars = {
    releseDate: 200212,
        duration: 100121,
        actors: ["albert22", "alen22", "alex22"],
        format: "DVD22"
}
movies["Tachki"] = cars;
//console.log(movies["Tachki"]);
let findingTachki = movies["Tachki"];
//console.log(findingTachki.duration, findingTachki.format)
console.log(Object.keys(movies));