// Your solution goes here 

function isStrongPassword(password){

    if(password.length < 8 ){
        // Too short password
        return false
    }
    if(password.toLowerCase().includes('password')){
        // Contains password
        return false
    }
    if(!containsUppercase(password)){
        // No uppercase
        return false
    }

    return true;
}


function containsUppercase(str) {
    return /[A-Z]/.test(str);
}
