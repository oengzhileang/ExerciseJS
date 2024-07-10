function sumArr(...arr){
    return arr.reduce((accumilator,num)=> accumilator + num,0)
}

console.log(sumArr(1,2,3,4,5,9,7,6,5));

