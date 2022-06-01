//let arr = [100, 4, 200, 1, 3, 2];
let arr1 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
let arr = [...new Set(arr1)];

arr.sort((a, b) => a - b);

console.log(arr);
let max = 0;
let count = 0;
for (let i = 0; i < arr.length; i++) {
	if (i > 0 && arr[i] === arr[i - 1] + 1) count++;
	else count = 1;

	max = Math.max(max, count);
}
console.log(max);
