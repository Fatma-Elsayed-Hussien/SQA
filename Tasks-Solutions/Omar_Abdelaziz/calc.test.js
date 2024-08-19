const { calculator } = require('./calc');

test("Basic Operations", () => {
    expect(calculator(9, 7, '+')).toBe(16);
    expect(calculator(10, 40, '-')).toBe(-30);
    expect(calculator(4, 9, '*')).toBe(36);
    expect(calculator(8, 2, '/')).toBe(4);
});

test("Invalid Operator", () => {
    expect(calculator(1, 8, '$').message).toBe("invalid operator");   
    expect(calculator(1, 8, '$').success).toBe(false);
});

test("Invalid Input", () => {
    expect(() => calculator("3", 5, '+')).toThrow("Please enter number");
    expect(() => calculator(3, "5", '+')).toThrow("Please enter number");
});

test("Division by Zero", () => {
    expect(calculator(0, 0, '/')).toBe(NaN);
    expect(calculator(5, 0, '/')).toBe(Infinity);
});