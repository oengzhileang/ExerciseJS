const fs = require('node:fs')
function Readfile(filepath) {
    return new Promise ((resolve,reject)=>{
        fs.readFile(filepath,'utf8',(err,data)=>{
            if(err){
                reject("Error read file")
            }else{
                resolve(data)
            }
        })
    })
}
function writeFile() {
        return new Promise ((resolve,reject)=>{
            fs.writeFile("writeFile.txt","Hello this is write file",(err)=>{
                if(err){
                    reject("Error write file")
                }else{
                    resolve("File write success")
                }
            })
        })
}

Readfile("input.txt")
    .then((message)=>{
        console.log(message);
        return writeFile(message)
    })
    .then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    })
    