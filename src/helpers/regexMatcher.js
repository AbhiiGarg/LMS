export function  isEmail(string){
    return string.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
}

export function isPassword(string){
    return string.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
}