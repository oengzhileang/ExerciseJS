const mockData = [
    {id: 1, name: "Sok"}, 
    {id: 2, name: "sao"}, 
    {id: 3, name: "pisey"}
]
function getUserInfoByID(id,cb) {
        setTimeout(()=>{
            const user = mockData.find((user)=> user.id==id)
            if(user){
                cb(null,user)
            }else{
                cb('User not found',null)
            }
        },2000)
}

function ProcessUserData(user,cb){
    setTimeout(()=>{
       user.name = user.name.toUpperCase();
       cb(null,user)
    },1500)
}
function updatebyID(id,newName){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            const userIndex = mockData.findIndex(user => user.id == id)
            if(userIndex){
                mockData[userIndex] = {id:id, ...newName}
                resolve(mockData[userIndex])
            }else{
                reject(new Error(`User with id ${id} not found`))
            }
        },1000)
    })
}
updatebyID(1,{name: "Leang"})
    .then(updateUser =>{
        console.log("Update user:" ,updateUser);
        console.log("Update mockData", mockData);
    })
    .catch(error=>{
        console.log(error.message);
    })
function deleteUserByID(id){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            const index = mockData.findIndex(user => user.id === id)
            if(index !== -1){
                const deletedUser = mockData.splice(index,1)[0]
                resolve(deletedUser)
            }
            else{
                reject(new Error(`User with id ${id} not found`))
            }
        },1500)
    })      
}
deleteUserByID(2)
    .then(deleteUser =>{
        console.log("delete user " , deleteUser);
        console.log("Update mockData", mockData);
    })
    .catch(error =>{
        console.log(error.message);
    })

// getUserInfoByID(1,(error,user)=>{
//     if(error){
//         console.log(error);
//     }else{
//         // console.log(user);
//         ProcessUserData(user,(err,processUser)=>{
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(processUser);
//             }
//         })
//     }
// })