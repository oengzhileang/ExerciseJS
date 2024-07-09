// Callback  = a function that is passed as an argument to another function.
// function hello(Callback){
//     console.log("Hello");
//     Callback();
// }
// function goodbye(){
//     console.log("Goodbye");
// }

// const { log } = require("console")

// hello(goodbye);



// function sum (Callback,x,y){
//     let result = x + y;
//     Callback(result);
// }
// function displayConsole(result){
//     console.log(result);
// }
// sum(displayConsole,9,9);


// Synchronous  will  start at the very top of the file and execute all the way down to the buttom  of file
// let a =1;
// let b =2;

// console.log("Synchronous");
// console.log(a);
// console.log(b);
//Asynchronous allow multiple operation to be performed 

// function func1(Callback){
//     setTimeout(function(){
//         console.log("Task1"); 
//          Callback()
//     },3000)
// }
// function func2() {
//     console.log("Task2");
//     console.log("Task3");
//     console.log("Task4");
// }

// func1(func2)

// function greet (name, callback){
//     console.log(`Hi, ${name}`);
//     callback();
// }

// function callme() {
//     console.log("I am callback function");
// }


// greet("Leang", callme);

// function ProcessChar(input, callback) {
//     return callback(input);
// }


// function toUpperCase(str) {
//     return str.toUpperCase();
// }

// console.log(ProcessChar("leang",toUpperCase));

// const names = ['Dog' , 'Cat' , "Tiger"]

// // names.forEach((name) => console.log(name))

// const myforeach = (arr, cb) =>{
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         cb(element);
//     }
// }

// myforeach(names , (name) => {
//     console.log(name);
// });

// function Greet(name,cb) {
//     console.log(`Hello ${name}`);
//     cb();
// }

// function sayGoodbye() {
//     console.log("Good bye");
// }

// Greet("Leang", sayGoodbye);

// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("Data fetched");
//         callback();
//     }, 1000)
// }
// function processData(){
//     console.log("Processing Data");
// }

// fetchData(processData);

// let array = [1,2,3,4,5]

// function ProcessArray(array, callback){
//     const elementArr = [];
//     for (let index = 0; index < array.length; index++) {
//         elementArr.push(callback(array[index]))
//     }

//     return elementArr;
// }
// function SqureArr(array) {
//     return array * array;
// }
// console.log(ProcessArray(array,SqureArr));


//Short hand
// array.forEach((array) =>{
//     console.log(array*2);
// })


//filter array
// let evenNumber = array.filter((array) =>{
//     return array % 2 === 0
// })
 
// console.log(evenNumber);

// function performTask(taskName , callback){
//     console.log("Performing task :" + taskName);
//     callback();
// }
// function TaskComplete() {
//     console.log("Task completed");
// }

// performTask("Clean the house" , TaskComplete)
// function greet(name, callback) {
//     console.log('Hello ' + name);
//     callback();
//   }

// function Welcome(){
//   console.log('Welcome to the platform!');
// }
// greet("Alexa",Welcome)
function fetchData(callback) {
  setTimeout(() => {
    console.log('Data fetched');
    callback();
  }, 1000);
}

function processData() {
  console.log('Processing data');
}

fetchData(processData);