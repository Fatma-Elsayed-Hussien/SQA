function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
expect.extend({  
    toHaveValidProfile(received) {
        const hasValidName = typeof received.name === 'string' && received.name.trim() !== '';
        const hasValidEmail = isValidEmail(received.email);
        const hasValidAge = typeof received.age === 'number' && received.age >= 18;
    
        const pass = hasValidName && hasValidEmail && hasValidAge;
    
        if (pass) {
            return {
                message: () => `expected ${JSON.stringify(received)} not to have a valid profile`,
                pass: true,
            };
        } else {
            return {
                message: () => `expected ${JSON.stringify(received)} to have a valid profile`,
                pass: false,
            };
        }
    }
})
describe('User Profile Validation', () => {
    test('valid user profile', () => {
        expect({ name: 'John', email: 'john@example.com', age: 24 }).toHaveValidProfile(); // PASS
    });

    test('invalid user profile', () => {
        expect({ name: '', email: 'invalid-email@ss.com', age: 13 }).not.toHaveValidProfile(); // FAIL
    });

    test('missing properties', () => {
        expect({ name: 'John', email: 'john@example.com' }).not.toHaveValidProfile(); // FAIL
        expect({ name: 'John', age: 24 }).not.toHaveValidProfile(); // FAIL
        expect({ email: 'john@example.com', age: 24 }).not.toHaveValidProfile(); // FAIL
    });

    test('invalid types', () => {
        expect({ name: 123, email: 'john@example.com', age: 24 }).not.toHaveValidProfile(); // FAIL
        expect({ name: 'John', email: 123, age: 24 }).not.toHaveValidProfile(); // FAIL
        expect({ name: 'John', email: 'john@example.com', age: '24' }).not.toHaveValidProfile(); // FAIL
    });
});