import { factorial, fibonacci } from './math.js';

describe('Función factorial', () => {
    test('factorial(0) debe retornar 1', () => {
        expect(factorial(0)).toBe(1);
    });

    test('factorial(1) debe retornar 1', () => {
        expect(factorial(1)).toBe(1);
    });

    test('factorial(5) debe retornar 120', () => {
        expect(factorial(5)).toBe(120);
    });

    test('factorial(6) debe retornar 720', () => {
        expect(factorial(6)).toBe(720);
    });

    test('factorial(10) debe retornar 3628800', () => {
        expect(factorial(10)).toBe(3628800);
    });

});

describe('Función fibonacci', () => {
    test('fibonacci(0) debe retornar 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    test('fibonacci(1) debe retornar 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    test('fibonacci(2) debe retornar 1', () => {
        expect(fibonacci(2)).toBe(1);
    });

    test('fibonacci(5) debe retornar 5', () => {
        expect(fibonacci(5)).toBe(5);
    });

    test('fibonacci(10) debe retornar 55', () => {
        expect(fibonacci(10)).toBe(55);
    });

    test('fibonacci(15) debe retornar 610', () => {
        expect(fibonacci(15)).toBe(610);
    });

});
