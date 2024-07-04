//1
for(let i=0; i<10; i++) {
  console.log(i);
}

//2
for(let i=10; i>0; i--) {
  console.log(i);
}

//3 
let grades = 80;
if(grades >= 90) {
  console.log('A');
} else if(grades >= 80) {
    console.log('B');
} else if(grades >= 70) {
    console.log('C');
} else if(grades >= 60) {
    console.log('D');
} else {
    console.log('F');
}


//4
let employees = ["Lara", "Evee", "Simi"]
let salary = [1000, 2000, 120.90]

for(let i=0; i<employees.length; i++) {
    console.log(employees[i] + ' Salary is ' + salary[i]);
}

//5 
for (let i =1; i<=10; i++){
    if(i%2 !== 0){
        console.log(i);
    }
}

//6
let arr = [1,2,3,4,5,6,7,8,9,10];

let evenNum=0;
let oddNum=0;
for (let i=0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
        evenNum++;
    }
    else{
        oddNum++;
    }
}
console.log('Even numbers: ' + evenNum);
console.log('Odd numbers: ' + oddNum);

//7
for(let i=0; i<100; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log('FizzBuzz');
    } else if(i%3 == 0){
        console.log('Fizz');
    } else if(i%5 == 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

//8
let sum = 0;
for(let i = 0; i<5; i++){
    sum = sum + 1;
}
console.log(sum);

//9
for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}

//10
let arr = [28, 31, 99, 100, 200];
let largestNum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
        largestNum = arr[i];
    }
}
console.log(largestNum);

