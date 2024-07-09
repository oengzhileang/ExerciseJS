let array = [1,2,3,4,5,6,7,8,9]
function ProcessEachElement(callback,array) {
    const result = [];
    for (let index = 0; index < array.length; index++) {
        const squere = callback(array[index])
        // result.push(callback(array[index]))
        result.push(squere)
    }
    return result;
}   

function squre(num) {
    return num * num;
}

console.log(ProcessEachElement(squre,array));


