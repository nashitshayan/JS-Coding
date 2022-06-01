const find = (arr) => {
	let start = 0;
	let end = arr.length - 1;

	while (start < end) {
		let mid = parseInt(start + (end - start) / 2);
		let num = mid % 2 == 0 ? mid + 1 : mid - 1;
		if (arr[mid] === arr[num]) start = mid + 1;
		else end = mid - 1;
	}
	return arr[start];
};

let arr1 = [1, 1, 2, 3, 3, 4, 4, 8, 8];
let arr2 = [3, 3, 7, 7, 10, 11, 11];

let res1 = find(arr1);
let res2 = find(arr2);
console.log(res2);
