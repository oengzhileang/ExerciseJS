// // function CountVowels(inputString){
// //     const vowels = "aeiouAEIOU"
// //     let count=0;
// //     for(let i=0; i<inputString.length; i++){
// //         for(let j=0; j<vowels.length; j++){
// //             if(inputString[i] == vowels[j]){
// //                 count++;
// //             }
// //         }
// //     }
// //     return count;
    
// // }
// // console.log(CountVowels("hello"));

function CountVowels(inputString){
    const vowels = "aeiouAEIOU"
    let count=0;
    for(let i=0; i<inputString.length; i++){
        if(vowels.includes(inputString[i])){
             count++;
        }
    }
    return count;
    
}
console.log(CountVowels("HELLO"));
