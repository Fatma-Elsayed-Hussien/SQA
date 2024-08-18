function calculator(num1, num2, operator) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("Please enter number");
    }
    if (operator === "+") return num1 + num2;
    if (operator === "-") return num1 - num2;
    if (operator === "*") return num1 * num2;
    if (operator === "/") return num1 / num2;
  
    return {
      message: "invalide operator",
      success: false,
    };
  }
  
  module.exports = { calculator };