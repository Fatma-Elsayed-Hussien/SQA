// ✨ Practice (1) 
// write test cases for the provided calculator function. 
// This function performs basic arithmetic operations (+, -, *, /) 
// based on the operator provided. 
// It also handles cases where the input values or the operator might be invalid.

// Test Cases for: 
// 1) Basic Operations
// 2) Invalid input (operator or number)
// 3) Division by Zero
// 4) Truthiness Check:
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

// ✨ Practice (2)
// - write function that validate user email
// - Write test cases to cover:
//    👉 Valid email addresses.
//    👉 Invalid email addresses (missing @, missing domain, etc.).
//    👉 Non-string inputs (e.g., numbers, null, empty string, ..).


// ✨ Practice (3)
// Write test cases for a shopping cart list. 
// Each item in the list is an object that contains the following properties:
//  - id: (number).
//  - productName:  (string).
//  - quantity: (number).
//  - price:  (number).
//  - addedToFavorite: boolean value indicating whether the product is added to the favorites list (true or false).

//   👉 Verify that every object in the array has the required properties (id, productName, quantity, price, addedToFavorite).
//   👉 Check the data types of each property to ensure they match the expected types.
//   👉 Validate the values for price and quantity
//        - invalid values (Negative, zero)

//   👉 write test case ensures that the total price for object is calculated correctly based on the quantity and price

// ------------------------------------------------------------------------------------------
//                        ✨✨✨✨ SECTION 3 ✨✨✨✨
// ------------------------------------------------------------------------------------------

// 📌 Practice (4) -- Unique Array Matcher
//       Create a custom matcher toContainUniqueElements 
//       to check if an array contains only unique elements. 
//       The array should not have any duplicate values.

//👉expect([1, 2, 3, 4]).toContainUniqueElements();   // PASS✅
//👉expect([1, 2, 3, 3]).toContainUniqueElements();   // FAIL❌


// 📌 Practice (5) -- User Profile Validation
//       Create a custom matcher toHaveValidProfile 
//       to check if a user profile object has valid properties. 
//       The profile should include:
//           name (string, non-empty)
//           email (string, valid email)
//           age (number, greater than or equal to 18)

//👉expect({ name:'John', email:'john@example.com', age:24 }).toHaveValidProfile();        // PASS✅
//👉expect({ name: '', email:'invalid-email@ss.com', age: 13 }).toHaveValidProfile();      // FAIL❌
