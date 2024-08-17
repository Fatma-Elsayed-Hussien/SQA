const { calculator } = require('./calculator.js');

test("Basic Operations", () => {
    expect(calculator(3, 5, '+')).toBe(8);
    expect(calculator(10, 5, '-')).toBe(5);
    expect(calculator(4, 5, '*')).toBe(20);
    expect(calculator(20, 5, '/')).toBe(4);
});

test("Invalid Operator", () => {
    expect(calculator(3, 5, '%').message).toBe("invalide operator");   
    expect(calculator(3, 5, '%').success).toBe(false);
});

test("Invalid Input", () => {
    expect(() => calculator("3", 5, '+')).toThrow("Please enter number");
    expect(() => calculator(3, "5", '+')).toThrow("Please enter number");
});

test("Division by Zero", () => {
    expect(calculator(0, 0, '/')).toBe(NaN);
    expect(calculator(5, 0, '/')).toBe(Infinity);
});