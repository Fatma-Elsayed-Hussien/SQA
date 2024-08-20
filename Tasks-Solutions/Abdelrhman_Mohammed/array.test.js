expect.extend({
     toContainUniqueElements(received) {
        const pass = Array.isArray(received) && new Set(received).size === received.length;
        if (pass) {
            return {
                message: () => `expected ${received} not to contain unique elements`,
                pass: true,
            };
        } else {
            return {
                message: () => `expected ${received} to contain unique elements`,
                pass: false,
            };
        }
    }
})
    
    
    test('array contains unique elements', () => {
        expect([1, 2, 3, 4]).toContainUniqueElements();
    });
    
    test('array contains duplicate elements', () => {
        expect([1, 2, 3, 3]).not.toContainUniqueElements();
    });