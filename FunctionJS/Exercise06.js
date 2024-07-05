function CheckPasswordStrength(password){
    if(password.length >= 8){
        return "Password is strong"
    }else{
        return "Password is not strong"
    }
}
console.log(CheckPasswordStrength("lekkkkkkk"));