// const arrColor = ['Red','Yellow','BLue','Orange']

// const [first,second] = arrColor;

// console.log(first,second);

//Swap vaviable with destructuring 

// const edibles  = ["food","fruits"]
// let [position1,position2] = edibles
// console.log(position1,position2); //food and fruit

// const edibles  = ["food","fruits"]

// let [position1,position2] = edibles

// //If we later want to swap the values of positionOne and positionTwo without destructuring,
// //  we would need to use another variable to temporarily hold the value of one of the current variables,
// //  then perform the swap.
// const temp  = position1

//     position1 = position2

//     position2 = temp;

// console.log(position1,position2);  // fruits food

//Swap without having to use a temporary variable

// const edibles = ["food", "fruits"];

// let [positionOne, positionTwo] = edibles;

// [positionOne, positionTwo] = [positionTwo, positionOne];

// console.log(positionOne, positionTwo); // fruits, food


//Spread operator
// spread operator expands elements

// Array Expansion:
// const arr  = [1,2,3]
// const newArr  = [5,6,...arr]
// console.log(newArr); // 5,6,1,2,3

//combine arr
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const combine = [...arr1,...arr2]
// console.log(combine);

//Rest operator
// The rest operator is used to collect multiple elements into a single array or to collect multiple properties into a single object. 

//Function parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum:", sum(1, 2, 3, 4, 5)); // Sum: 15
console.log("Sum:", sum(10, 20)); // Sum: 30

//Array destructuring

const arr = [1,2,3,4,5]

const [first,... rest] = arr

console.log(first); //1
console.log(rest);  //2,3,4,5

//Object  destructuring

const object = {a:1, b:2, c:3, d:4}

const{a,b, ...last} = object

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(last); // Output: { c: 3, d: 4 }
