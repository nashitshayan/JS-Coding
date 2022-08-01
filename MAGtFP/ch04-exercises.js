import {
	split,
	filter,
	match,
	reduce,
	replace,
} from '@mostly-adequate/support';
//Chapter 04
// Ex1 : Refactor to remove all arguments by partially applying the function.

const words = (str) => split(' ', str);
let q1 = words('I am a Frontend Developer');
q1;

//sol1
const spliyBySpace = split(' ');
let a1 = spliyBySpace('I am a Frontend Dev');
a1;

//Ex2: Refactor to remove all arguments by partially applying the functions.
const filterQs = (xs) => filter((x) => match(/q/i, x), xs);
let q2 = filterQs(['opaque', 'test', 'ThisHasAQInIt', 'Quirk', 'Plaque']);
q2;

//Sol2
const matchQ = match(/q/i);
const qFilter = filter(matchQ);
let a2 = qFilter(['opaque', 'test', 'ThisHasAQInIt', 'Quirk', 'Plaque']);
a2;

//Ex3: Considering the following function:
//
//   const keepHighest = (x, y) => (x >= y ? x : y);
//
// Refactor `max` to not reference any arguments using the helper function `keepHighest`.

// max :: [Number] -> Number
const max = (xs) => reduce((acc, x) => (x >= acc ? x : acc), -Infinity, xs);
let q3 = max([44, 24, 33, 35, 67, 52, 99]);
q3;

//sol3
const keepHighest = (x, y) => (x >= y ? x : y);
const keepMax = reduce(keepHighest, -Infinity);
let a3 = keepMax([44, 24, 33, 35, 67, 52, 99]);
a3;
