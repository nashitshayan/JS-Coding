import { calculator } from './calculator';

describe('calucator', () => {
	test('add two positive numbers', () => {
		expect(calculator.add(2, 3)).toEqual(5);
	});
	test('add a positive and a negative number', () => {
		expect(calculator.add(2, -3)).toEqual(-1);
	});
	test('add two negative numbers', () => {
		expect(calculator.add(-2, -3)).toEqual(-5);
	});
	test('subtract two positive numbers', () => {
		expect(calculator.subtract(5, 3)).toEqual(2);
	});
	test('subtract two negative numbers', () => {
		expect(calculator.subtract(-5, -3)).toEqual(-2);
	});
	test('subtract a larger number from a smaller number', () => {
		expect(calculator.subtract(5, 9)).toEqual(-4);
	});
	test('multiply two positive numbers', () => {
		expect(calculator.multiply(5, 3)).toEqual(15);
	});
	test('multiply two negative numbers', () => {
		expect(calculator.multiply(-5, -3)).toEqual(15);
	});
	test('multiply two decimal numbers', () => {
		expect(calculator.multiply(1.2, 1.2)).toEqual(1.44);
	});
	test('multiply two decimars less than 1', () => {
		expect(calculator.multiply(0.1, 0.2)).toEqual(0.02);
	});
	test('divide two numbers that are divisble', () => {
		expect(calculator.divide(9, 3)).toEqual(3);
	});
	test('divide two numbers that not divisble', () => {
		expect(calculator.divide(9, 2)).toEqual(4.5);
	});
	test('divide two decimal numbers ', () => {
		expect(calculator.divide(0.5, 0.1)).toEqual(5);
	});
});
