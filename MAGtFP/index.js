import { split } from '@mostly-adequate/support';

//Refactor to remove all arguments by partially applying the function.
//ex1
const words = (str) => split(' ', str);
let q1 = words('I am a Frontend Developer');
q1;

//sol1
const spliyBySpace = split(' ');
let a1 = spliyBySpace('I am a Frontend Dev');
a1;
