import { split, filter, match } from '@mostly-adequate/support';

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
