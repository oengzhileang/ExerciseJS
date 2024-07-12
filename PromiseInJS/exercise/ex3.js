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
function writeFile(filepath) {
    return new Promise ((resolve,reject)=>{
        fs.writeFile(filepath,"Hello this is write file",(err)=>{
            if(err){
                reject("Error write file")
            }else{
                resolve("File write success")
            }
        })
    })
}
async function readAndWrite(){
    try{
        const readfile = await Readfile("input.txt");
        console.log(readfile);
        const writefile =  await writeFile("writeFile.txt")
        console.log(writefile);
    }catch(error){
        console.log(error);
    }
}

readAndWrite();