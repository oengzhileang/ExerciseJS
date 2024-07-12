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

getUserInfoByID(1,(error,user)=>{
    if(error){
        console.log(error);
    }else{
        // console.log(user);
        ProcessUserData(user,(err,processUser)=>{
            if(err){
                console.log(err);
            }else{
                console.log(processUser);
            }
        })
    }
})