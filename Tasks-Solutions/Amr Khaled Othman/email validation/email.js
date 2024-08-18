var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail(email){
    if (typeof email !== "string") {
        throw new Error("Please enter string");
    }
    return emailRegex.test(email);
  }

module.exports = { validateEmail };