let s1 = 'applepenapple';
let words1 = ['apple', 'pen'];

let s2 = 'dogcatsandog';
let words2 = ['cats', 'dog', 'sand', 'and', 'cat'];

let res = s1;
//let res= s2;
words1.forEach((word) => {
	res = res.split(word).join('');
});

console.log(res === '');
