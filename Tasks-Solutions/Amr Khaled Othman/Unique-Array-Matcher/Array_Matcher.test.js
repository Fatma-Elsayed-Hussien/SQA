expect.extend({
    toContainUniqueElements(received) {
        if(!Array.isArray(received)) throw new Error("Please enter an array");
        const set1 = new Set(received);
        const pass = (set1.size === received.length);
        if (pass) {
            return {
                pass: true,
                message: () => `array elements are distinct`
            }
        }
        else {
            return {
                pass: false,
                message: () => `array elements are not distinct`
            }
        }
    }
})

test(`Check if array elements distinct or not`, () => {
    expect([1, 2, 3, 4]).toContainUniqueElements();
    expect([1, 2, 3, 3]).not.toContainUniqueElements();
})

test(`Check if array elements distinct or not`, () => {
    expect(() => expect(55555).toContainUniqueElements()).toThrow("Please enter an array");
    expect(() => expect(null).toContainUniqueElements()).toThrow("Please enter an array");
    expect(() => expect(undefined).toContainUniqueElements()).toThrow("Please enter an array");
    expect(() => expect({}).toContainUniqueElements()).toThrow("Please enter an array");
    expect(() => expect("amr").toContainUniqueElements()).toThrow("Please enter an array");
})
