//ArrowFunction.js 

//ArrowFunction is concise way of writing JavaScript functions in shorter way.

//Simple arrow function
// const add = (a,b) => {
//     return a+b;
// }
// console.log(add(9,9));


//traditional anonymous function
// (function (a){
//     return a+100;
// });
//Remove the word "function" and place arrow between the argument and opening body brace
// ((a) =>{
//     return a + 100;
// })


//Arrow Function with Single Parameter
// const squre = n => {
//     return n*n;
// }
// console.log(squre(4));

// const squre = n => n*n;
// console.log(squre(8,8));

//Arrow Function with No Parameters:
// const greet = () => "hello world";
// console.log(greet());

//Difference Between (a, b) => a * b and (a, b) => { return a * b; }
//1 Concise Body Syntax:
// Usage: Best for single expressions where the result is returned without using the return keyword.
// const multiply = (a,b) => a*b;
//example
// const multiply = (a,b) => a*b;
// console.log(multiply(9,9));

//2Block Body Syntax:
//Usage: Required when the function has multiple statements or you need to execute additional logic before returning a value.

// const multiple = (a,b) =>{
//     return a*b;
// }

// const multiple = (a,b) =>{
//     console.log("Multiply a and b");
//     return a*b;
// }
// console.log(multiple(100,200));