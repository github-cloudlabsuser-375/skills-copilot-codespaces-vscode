const Calculator = require('./test'); // Assuming test.js is in the same directory

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should add two positive numbers', () => {
        calculator.add(5);
        expect(calculator.getResult()).toBe(5);
    });

    test('should subtract two positive numbers', () => {
        calculator.add(10).subtract(5);
        expect(calculator.getResult()).toBe(5);
    });

    test('should  multiply positive numbers', () => {
        calculator.add(5).multiply(3);
        expect(calculator.getResult()).toBe(15);
    });

    test('should  divide positive numbers', () => {
        calculator.add(10).divide(2);
        expect(calculator.getResult()).toBe(5);
    });

    test('divide by zero', () => {
        expect(() => {
            calculator.divide(0);
        }).toThrow("Cannot divide by zero");
    });

    test('reset', () => {
        calculator.add(5).reset();
        expect(calculator.getResult()).toBe(0);
    });
});