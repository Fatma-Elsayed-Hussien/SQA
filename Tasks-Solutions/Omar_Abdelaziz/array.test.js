expect.extend({
    toContainUniqueElements(received) {
        if (!Array.isArray(received)) throw new Error("Please enter an array");
        
        for (let i = 0; i < received.length; i++) {
            for (let j = i + 1; j < received.length; j++) {
                if (received[i] === received[j]) {
                    return {
                        pass: false,
                        message: () => `array elements are not distinct`
                    };
                }
            }
        }
        
        return {
            pass: true,
            message: () => `array elements are distinct`
        };
    }
});

test('Check if array elements are distinct', () => {
    expect([1, 2, 3, 4]).toContainUniqueElements();
    expect([1, 2, 3, 3]).not.toContainUniqueElements();
});

test('Check if non-array inputs throw an error', () => {
    expect(() => expect(777777).toContainUniqueElements()).toThrow("Please enter an array");
    expect(() => expect(null).toContainUniqueElements()).toThrow("Please enter an array");
    expect(() => expect(undefined).toContainUniqueElements()).toThrow("Please enter an array");
});