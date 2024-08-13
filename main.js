function sum(a, b){
    return a+b;
}

function sendingEmailTo(name){
    return `Hi ${name}
    Thank you for joining us We are glad to have you on borad

    You now have Verification code this verfication code is only valid for the next 3 minutes 

    fA324

    Thanks
    John
    `
}

function isEven(num){
    if(num % 2 === 0){
        return true;
    }
    else{
        return false;
    }
    // return num % 2 === 0 ? true : false;
}

function getUserByID(id){ 
    if(!id){
        throw new Error("id is not defined");
    }
   return {
    id: 1, 
    name: "fatma", 
    age: 24,
    address: "ismailia",
   }
}
module.exports ={
    sum,
    sendingEmailTo,
    isEven,
    getUserByID
} 