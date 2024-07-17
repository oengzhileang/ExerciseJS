
const Readfile = require("./readFilePromise");
const writeFile = require("./writeFilePromise");

Readfile("input.txt")
    .then((data)=>{
        console.log(data);
        const newData = data + "KK"
        return writeFile ('writeFile.txt', newData)
    })
    .then((data1)=>{
        console.log(data1);
        return Readfile('writeFile.txt')
    })
    .then((data2)=>{
        console.log(data2);
    })
    .catch((error)=>{
        console.log(error);
    })