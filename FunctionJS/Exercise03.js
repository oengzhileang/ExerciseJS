
let arr = [1,2,3,4,5]
const AverageNum = (arr) => {
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum / arr.length;
}
console.log(AverageNum(arr));