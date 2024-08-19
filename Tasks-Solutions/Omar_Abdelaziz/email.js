var emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function vEmail(email){
    if (typeof email !== "string") {
        throw new Error("Please enter string");
    }
    return emailReg.test(email);
  }

module.exports = { vEmail };