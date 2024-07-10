//input = countnum(1,2,2,3,4,1,3)
//output = {1:2, 2;2 ,3;3, 4}

function countNum (...nums){
    return nums.reduce((acc,current)=>{
        if(acc[current]){
            acc[current]= acc[current] + 1;
        }else{
            acc[current] = 1
        }
        return acc;
    },{})
}

console.log(countNum(1,2,2,3,1,4,5,6,5));