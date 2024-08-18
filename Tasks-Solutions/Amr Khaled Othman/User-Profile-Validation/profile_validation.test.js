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
})

test(`Check if profile is valid or not`, () => {
    expect({name: 'Amr Khaled', email: 'amr@gmail.com', age: 25}).toHaveValidProfile();
    expect({name: '', email: 'amr@gmail.com', age: 25}).not.toHaveValidProfile();
    expect({name: 'Amr Khaled', email: 'invalid-email', age: 25}).not.toHaveValidProfile();
    expect({name: 'Amr Khaled', email: 'amr@gmail.com', age: 17}).not.toHaveValidProfile();
})

test(`Check if input is an object`, () => {
    expect(() => expect(55555).toHaveValidProfile()).toThrow("Please enter an object");
    expect(() => expect(null).toHaveValidProfile()).toThrow("Please enter an object");
    expect(() => expect(undefined).toHaveValidProfile()).toThrow("Please enter an object");
    expect(() => expect([]).toHaveValidProfile()).toThrow("Please enter an object");
    expect(() => expect("amr").toHaveValidProfile()).toThrow("Please enter an object");
})