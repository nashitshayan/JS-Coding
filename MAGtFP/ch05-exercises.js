import { prop, last, compose, map } from '@mostly-adequate/support';
//Chapter 05
//In each following exercise, we'll consider Car objects with the following shape:
const car = {
	name: 'Aston Martin One-77',
	horsepower: 750,
	dollar_value: 1850000,
	in_stock: true,
};

//Ex1 Use compose() to rewrite the function below.

const isLastInStock = (cars) => {
	const lastCar = last(cars);
	return prop('in_stock', lastCar);
};

let q1 = isLastInStock([car]);
q1;

//Sol1
const isLastStock = compose(prop('in_stock'), last);
let a1 = isLastStock([car]);
a1;
