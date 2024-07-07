const fs = require('node:fs');

const filepath = 'writeFile.txt'

function writeFilePath (filepath,content,callback){
    fs.writeFile(filepath, content, err => {
        if (err) {
            callback(err);
        } else {
          // file written successfully
          callback(null, 'File written successfully');
        }
      });
}
function ConsoleWritefile(err,message){
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log(message);
    }
}
// writeFilePath(filepath,"Hello",(err,message) => {
//     if(err){
//         if (err) {
//             console.error('Error writing file:', err);
//         } else {
//             console.log(message);
//         }
//     }
// });
writeFilePath(filepath,"Hello",ConsoleWritefile);