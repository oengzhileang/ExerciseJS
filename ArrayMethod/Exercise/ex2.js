const arr = [1, 4, 3, 2, 2, 2, 3, 3, 3, 4, 5];
const uniqueNum = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(uniqueNum); // [1, 2, 3, 4, 5]
