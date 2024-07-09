// const fs = require('fs');

const { Writefile } = require("./ex4");
const { Readfile } = require("./ex3")

Readfile('input.txt',(data)=>{
    console.log("Read file input txt:" , data);
    Writefile("output1.txt", data + "First modification",(data)=>{
        console.log(data);
        Readfile("output1.txt",(data)=>{
            console.log("Read file output1: " , data);
        })
        Writefile("output2.txt", data + "Second modification",(data)=>{
            console.log(data);
            Readfile("output2.txt",(data)=>{
                console.log("Read file output2: " , data);
            })
        })
    })
})
// function readFile(filePath, callback) {
//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             callback(err);
//         } else {
//             callback(null, data);
//         }
//     });
// }

// function Writefile(filePath, content, callback) {
//     fs.writeFile(filePath, content, 'utf8', (err) => {
//         if (err) {
//             callback(err);
//         } else {
//             callback(null, 'File written successfully');
//         }
//     });
// }

// // Step-by-step process

// // Step 1: Read the content of 'input.txt'
// readFile('input.txt', (err, data) => {
//     if (err) {
//         return console.error('Error reading input.txt:', err);
//     }

//     // Step 2: Append "First modification" to the content and write to 'output1.txt'
//     const modifiedContent1 = data + ' First modification';
//     writeFile('output1.txt', modifiedContent1, (err) => {
//         if (err) {
//             return console.error('Error writing to output1.txt:', err);
//         }

//         // Step 3: Read 'output1.txt'
//         readFile('output1.txt', (err, data) => {
//             if (err) {
//                 return console.error('Error reading output1.txt:', err);
//             }

//             // Step 4: Append "Second modification" to the content and write to 'output2.txt'
//             const modifiedContent2 = data + ' Second modification';
//             writeFile('output2.txt', modifiedContent2, (err) => {
//                 if (err) {
//                     return console.error('Error writing to output2.txt:', err);
//                 }

//                 // Step 5: Read 'output2.txt' and print to the console
//                 readFile('output2.txt', (err, data) => {
//                     if (err) {
//                         return console.error('Error reading output2.txt:', err);
//                     }

//                     console.log('Final content of output2.txt:', data);
//                 });
//             });
//         });
//     });
// });


// function readFile(filePath, cb){
//     fs.readFile(filePath , 'utf8' , ( err,data ) =>{
//         if(err){
//             cb(err)
//             return;
//         }else{
//             cb(null,data)
//         }
//     })
// }

// function consoleFile(err,data){
//     if(err){
//         console.error(err)
//         return;
//     }else{
//         console.log("file content in input.txt: " , data);
//     }
// }

// readFile('input.txt',consoleFile)


// //Step 2 Append " First modification " to the content and write it to 'output1.txt'

// function Writefile(filePath,content,cb) {
//     fs.writeFile(filePath, content, err => {
//         if (err) {
//             cb(err);
//         } else {
//           // file written successfully
//           cb(null, 'File written successfully');
//         }
//       });
// }
// function consoleWritefile (err,message){
//     if(err){
//         console.error("Error writing file" ,err)
//         return;
//     }else{
//         console.log("file written: " , message)
//     }
// }

// // Writefile("output1.txt", "First modification",consoleWritefile)


// //Step 3    Read `output1.txt` and append “SEcond modification” to the file `output2.txt`


// Writefile("output1.txt", "First modification",consoleWritefile)
// readFile("output1.txt",consoleFile);

// Writefile("output2.txt", "Second modification", consoleWritefile)
// readFile("output2.txt",consoleFile);



