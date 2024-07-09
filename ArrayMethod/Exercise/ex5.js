let numbers = [2, 5, 6, 4, 3, 7];

    // Using reduce method to find max value

// const Max = numbers.reduce((pre,cur)=>{
//     return pre > cur ? pre : cur
// })
// console.log(Max);

const maxArr = numbers.reduce((total,num)=> {
    if(num>total){
        return num;
    }
    else{
        return total
    }
},0)

console.log(maxArr);