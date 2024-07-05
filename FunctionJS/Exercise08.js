
// let numbers = [23, 75, 11, 7, 88];
// function sortNum(numbers) {
//     return numbers.sort((a, b) => {
//         return a - b;
//     });
// }
// console.log(sortNum(numbers));

let numbers = [23, 75, 11, 7, 88,10];
function SortNum(numbers){
    for(let i = 0; i < numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            if(numbers[i] > numbers[j]){
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    return numbers;  //Return short array
}
console.log(SortNum(numbers));

