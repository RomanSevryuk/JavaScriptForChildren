let massiv1 = [1, 2, 3];
let massiv2 = [1, 2, 3];

let areArraysSame = function (array1, array2) {
    if (array1.length !== array2.length) {
        return false + " - Длинна массива не равна!";
    } else {
         for (let i = 0; i < array1.length; i++)
            if (array1[i] === array2[i]) {
                if (i === array1.length - 1) {
                    return true + " - Значения в массиве равны!";
                }                
            } else {
                return false + " - Значения в массиве не равны!";
            }           
        }           
}

console.log(areArraysSame(massiv1, massiv2,));