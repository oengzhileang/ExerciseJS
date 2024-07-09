
// const fs = require('node:fs');

// const filePath = 'Readfile.txt'

// function readFile (filePath,cb){
//     fs.readFile(filePath, 'utf8' , (err ,data) =>{
//         if(err){
//             cb(err ,null);
//             return;
//         }
//         cb(null,data);
//     })
// }

// function consoleContent(err,data) {
//     if(err){
//         console.error(err);
//         return;
//     }
//     else{
//         console.log("File content: " , data);
//     }
// }

// readFile(filePath, consoleContent);

// const fs = require('node:fs')

// function Readfile(filepath,cb) {
//     fs.readFile(filepath,'utf8', (err,data)=>{
//         if(err){
//             cb(err,null)
//             return;
//         }
//         cb(null,data)
//     })
// }
// function consoleContent(err,data){
//     if(err){
//         console.log(err);
//         return;
//     }
//     else{
//         console.log("file content: ", data);
//     }
// }

// Readfile('Readfile.txt',consoleContent)

const fs = require('node:fs')
function Readfile(filepath,cb) {
        fs.readFile(filepath,'utf8', (err,data)=>{
            if(err){
                console.log("Error read file:" , err);
            }
            cb(data)
        })
}
// Readfile('input.txt', (data)=>{
//     console.log("Data: ", data);
// })

module.exports = {Readfile};