import {
	prop,
	last,
	compose,
	map,
	reduce,
	add,
	sortBy,
	concat,
} from '@mostly-adequate/support';
//Chapter 05
//In each following exercise, we'll consider Car objects with the following shape:
const cars = [
	{
		name: 'Aston Martin One-77',
		horsepower: 750,
		dollar_value: 1850000,
		in_stock: true,
	},
	{
		name: 'Test',
		horsepower: 550,
		dollar_value: 1250000,
		in_stock: true,
	},
];

//Ex1 Use compose() to rewrite the function below.

const isLastInStock = (cars) => {
	const lastCar = last(cars);
	return prop('in_stock', lastCar);
};

let q1 = isLastInStock(cars);
q1;

//Sol1
const isLastStock = compose(prop('in_stock'), last);
let a1 = isLastStock(cars);
a1;

//Ex2 :
//Considering the following function:
//
const average = (xs) => reduce(add, 0, xs) / xs.length;
//
// Use the helper function `average` to refactor `averageDollarValue` as a composition.

// averageDollarValue :: [Car] -> Int
const averageDollarValue = (cars) => {
	const dollarValues = map((c) => c.dollar_value, cars);
	dollarValues;
	return average(dollarValues);
};

let q2 = averageDollarValue(cars);
q2;

//sol2
const avgDollarValue = compose(average, map(prop('dollar_value')));
let a2 = avgDollarValue(cars);
a2;

//EX3 Refactor `fastestCar` using `compose()` and other functions in pointfree-style.

// fastestCar :: [Car] -> String
const fastestCar = (cars) => {
	const sorted = sortBy((car) => car.horsepower, cars);
	const fastest = last(sorted);
	return concat(fastest.name, ' is the fastest');
};

let q3 = fastestCar(cars);
