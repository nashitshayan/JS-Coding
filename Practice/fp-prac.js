const greeting = (x) => (y) => `${x} ${y}!`;
const howdy = greeting('Howdy');
const hello = greeting('Hello');

const g1 = howdy('Nashit');
const g2 = hello('Nashit');

g1;
g2;
