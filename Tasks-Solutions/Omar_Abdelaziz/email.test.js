const { vEmail } = require('./email.js');

describe("Email Validation Tests", () => {
    test("Valid email addresses", () => {
        const validEmails = [
            "2002amrkhaled@gmail.com",
            "omar@yahoo.com",
            "koko@outlook.com"
        ];
        validEmails.forEach(email => {
            expect(vEmail(email)).toBe(true);
        });
    });

    test("Invalid email addresses", () => {
        const invalidEmails = [
            'amr',
            '@amr.com',
            'amr@.com',
            'amr@com',
            'amr@gmail.c',
            'amr@gmail..com'
        ];
        invalidEmails.forEach(email => {
            expect(vEmail(email)).toBe(false);
        });
    });

    test("Non-string inputs", () => {
        const nonStringInputs = [
            55555,
            null,
            undefined,
            {},
            [],
            true
        ];
        nonStringInputs.forEach(input => {
            expect(() => vEmail(input)).toThrow("Please enter a string");
        });
        expect(vEmail('')).toBe(false);
    });
});