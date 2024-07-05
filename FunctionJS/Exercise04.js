const CalculateBMI = (function(weight,height){
    return weight / ( height * height)
})
console.log(CalculateBMI(70,1.75));