const orderTotal = require('./practice-test');

it('No quantity', () => {
	expect(
		orderTotal({
			items: [{ name: 'item1', price: 2 }],
		}),
	).toBe(2);
});

it('quantity', () => {
	expect(
		orderTotal({
			items: [{ name: 'item2', price: 3, quantity: 3 }],
		}),
	).toBe(9);
});

it('quantity', () => {
	expect(
		orderTotal({
			items: [
				{ name: 'item1', price: 3, quantity: 5 },
				{ name: 'item2', price: 5, quantity: 30 },
			],
		}),
	).toBe(165);
});
