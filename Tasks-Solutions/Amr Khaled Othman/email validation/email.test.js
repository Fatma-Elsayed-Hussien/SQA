const { validateEmail } = require('./email.js');

test("Valid email addresses", () => {
    expect(validateEmail("2002amrkhaled@gmail.com")).toBe(true);
    expect(validateEmail("omar@yahoo.com")).toBe(true);
    expect(validateEmail("koko@outlook.com")).toBe(true);
});

// test('Invalid email addresses', () => {
//     expect(validateEmail('amr')).toBe(false); 
//     expect(validateEmail('@amr.com')).toBe(false); 
//     expect(validateEmail('amr@.com')).toBe(false); 
//     expect(validateEmail('amr@com')).toBe(false); 
//     expect(validateEmail('amr@gmail.c')).toBe(false); 
//     expect(validateEmail('amr@gmail..com')).toBe(false);
// });

test('Non-string inputs', () => {
    expect(() => validateEmail(55555)).toThrow("Please enter string");
    expect(() => validateEmail(null)).toThrow("Please enter string"); 
    expect(() => validateEmail(undefined)).toThrow("Please enter string"); 
    expect(() => validateEmail({})).toThrow("Please enter string"); 
    expect(() => validateEmail([])).toThrow("Please enter string");
    expect(() => validateEmail(true)).toThrow("Please enter string"); 
    expect(validateEmail('')).toBe(false);
});
