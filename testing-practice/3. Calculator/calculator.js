const calculator = {
	add: (num1, num2) => num1 + num2,
	subtract: (num1, num2) => num1 - num2,
	multiply: (n1, n2) => (n1 * 100 * (n2 * 100)) / 10000,
	divide: (n1, n2) => n1 / n2,
};

export { calculator };
