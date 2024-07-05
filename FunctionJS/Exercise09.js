let arr = [11,9,3,20,7,8,1,33]
function MedianValue (arr){
    let median=0;
    for(let i = 0; i < arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    if(arr.length%2!=0){
        // ((arr.length+1)/2 )-1
        median = arr[((arr.length+1)/2 )-1]
        return median
    } else{
        median = (arr[((arr.length)/2 )-1] + arr[(arr.length)/2])/2
        return  median
    }
    // return arr;
}
console.log(MedianValue(arr));
