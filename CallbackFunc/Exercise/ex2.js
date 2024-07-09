//Create a function that takes an array of numbers and a callback. The callback should return true if a number is even. Use the callback to filter the array synchronously. 
let array = [2,3,4,5,6,7,8,9];

function filterArray(array, callback) {
    const result = [];
    for (let index = 0; index < array.length; index++) {

        //if it num % 2 == 0 true output 
        if (callback(array[index])) {
            result.push(array[index]);
        }
        // result.push(callback(array[index]))
    }
    return result;
}

function isEven(num) {
    return num % 2 === 0;
}

console.log(filterArray(array, isEven));