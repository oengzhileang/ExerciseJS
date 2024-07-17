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
module.exports = Readfile