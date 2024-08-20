var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

expect.extend({
    toHaveValidProfile(received) {
        if (typeof received !== 'object' || received === null || Array.isArray(received)) {
            throw new Error("Please enter an object");
        }
        const ValidName = (typeof received.name === 'string') && (received.name !== '');
        const ValidEmail = (typeof received.email === 'string') && (emailRegex.test(received.email));
        const ValidAge = (typeof received.age === 'number') && (received.age >= 18);

        const pass = ValidName && ValidAge && ValidEmail;
        if (pass) {
            return {
                pass: true,
                message: () => `profile is Valid`
            }
        } else {
            return {
                pass: false,
                message: () => `profile is invalid`
            }
        }
    }
});

describe("Profile Validation Tests", () => {
    test("Valid profile", () => {
        expect({name: 'omarAbdelaziz', email: 'omar@gmail.com', age: 25}).toHaveValidProfile();
    });

    test("Invalid profiles", () => {
        expect({name: '', email: 'omar@gmail.com', age: 25}).not.toHaveValidProfile();
        expect({name: 'omarAbdelaziz', email: 'invalid-email', age: 25}).not.toHaveValidProfile();
        expect({name: 'omarAbdelaziz', email: 'omar@gmail.com', age: 17}).not.toHaveValidProfile();
    });
});