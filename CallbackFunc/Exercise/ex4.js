// const fs = require('node:fs');

// const filepath = 'writeFile.txt'

// function writeFilePath (filepath,content,callback){
//     fs.writeFile(filepath, content, (err) => {
//         if (err) {
//             callback(err);
//         } else {
//           // file written successfully
//           callback(null, 'File written successfully');
//         }
//       });
// }
// function ConsoleWritefile(err,message){
//     if (err) {
//         console.error('Error writing file:', err);
//     } else {
//         console.log(message);
//     }
// }
// // writeFilePath(filepath,"Hello",(err,message) => {
// //     if(err){
// //         if (err) {
// //             console.error('Error writing file:', err);
// //         } else {
// //             console.log(message);
// //         }
// //     }
// // });
// writeFilePath(filepath,"Hello",ConsoleWritefile);

// const fs = require('node:fs')

// function Writefile(filepath,content,cb){
//     fs.writeFile(filepath,content,(err)=>{
//         if(err){
//             cb(err)
//         }else{
//             cb(null,"file written successfully")
//         }
//     })
// }
// function consoleWritefile(err,message){
//     if(err){
//         console.log("Error writing file:", err);
//     }
//     else{
//         console.log(message);
//     }
// }
// Writefile('writeFile.txt', "Hellooo",consoleWritefile)
const fs = require('node:fs')

function Writefile(filepath,content,cb){
    fs.writeFile(filepath,content,(err)=>{
        if(err){
            console.log("Error written file: ",err);
        }else{
            cb("file written successfully")
        }
    })
}
// Writefile('writeFile1.txt',"Hello", (message)=>{
//     console.log(message);
// })

module.exports = {Writefile}