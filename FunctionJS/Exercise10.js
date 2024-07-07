//Recursive
function FactorailNum (NoneNegativeNum){
    if(NoneNegativeNum == 0){
        return 1; //base case 0! = 1;
    }else if (NoneNegativeNum < 0 ){
        return "Negative Number"
    }
    return NoneNegativeNum * FactorailNum(NoneNegativeNum-1)
}

console.log((FactorailNum(0)));