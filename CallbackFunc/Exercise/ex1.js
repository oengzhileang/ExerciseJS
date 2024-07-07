let array = [1,2,3,4,5,6,7,8,9]
function ProcessEachElement(callback,array) {
    const result = [];
    for (let index = 0; index < array.length; index++) {
        result.push(callback(array[index]))
    }
    return result;
}   

function squre(array) {
    return array * array;
}

console.log(ProcessEachElement(squre,array));


