
const fs = require('node:fs')
function writeFile() {
    return new Promise ((resolve,reject)=>{
        fs.writeFile("writeFile.txt","Hellokkk",(err)=>{
            if(err){
                reject("Error write file")
            }else{
                resolve("File write success")
            }
        })
    })
}

module.exports = writeFile