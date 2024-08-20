const isValidEmail = require('./email');

describe('Email Validator', () => {
    test('valid email addresses', () => {
        expect(isValidEmail('test@example.com')).toBe(true);
        expect(isValidEmail('user.name+tag+sorting@example.com')).toBe(true);
        expect(isValidEmail('user.name@example.co.uk')).toBe(true);
    });

    test('invalid email addresses', () => {
        expect(isValidEmail('plainaddress')).toBe(false);
        expect(isValidEmail('missingatsign.com')).toBe(false);
        expect(isValidEmail('missingdomain@.com')).toBe(false);
        expect(isValidEmail('missingdot@domain')).toBe(false);
        expect(isValidEmail('missingboth@.')).toBe(false);
    });

    test('non-string inputs', () => {
        expect(isValidEmail(12345)).toBe(false);
        expect(isValidEmail(null)).toBe(false);
        expect(isValidEmail(undefined)).toBe(false);
        expect(isValidEmail('')).toBe(false);
        expect(isValidEmail({})).toBe(false);
        expect(isValidEmail([])).toBe(false);
    });
});