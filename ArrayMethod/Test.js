const nestedArr = [ [1,2], [3,4], [5,6]]
let flatarr = nestedArr.reduce((acc, cur)=> acc.concat(cur),[])

console.log(flatarr);