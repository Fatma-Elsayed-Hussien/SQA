const { calculator } = require("./calculator");

test("Basic Operations", () => {
    expect(calculator(7, 2, '+')).toBe(9);
    expect(calculator(15, 3, '-')).toBe(12);
    expect(calculator(6, 7, '*')).toBe(42);
    expect(calculator(25, 5, '/')).toBe(5);
});

test("Invalid Operator", () => {
    expect(calculator(8, 3, '^').message).toBe("invalid operator");   
    expect(calculator(8, 3, '^').success).toBe(false);
});

test("Invalid Input", () => {
    expect(() => calculator("8", 3, '+')).toThrow("Please enter number");
    expect(() => calculator(8, "3", '+')).toThrow("Please enter number");
});

test("Division by Zero", () => {
    expect(calculator(0, 0, '/')).toBe(NaN);
    expect(calculator(10, 0, '/')).toBe(Infinity);
});