export const analyzeArray = (arr) => {
	const { minElem, maxElem } = getMinMax(arr);
	return {
		average: getAverage(arr),
		min: minElem,
		max: maxElem,
		length: arr.length,
	};
};

const getAverage = (arr) => {
	let sum = arr.reduce((prev, cur) => prev + cur, 0);
	return parseInt(sum / arr.length);
};
const getMinMax = (arr) => {
	let maxElem = Number.MIN_SAFE_INTEGER;
	let minElem = Number.MAX_SAFE_INTEGER;
	arr.forEach((elem) => {
		if (elem > maxElem) maxElem = elem;
		if (elem < minElem) minElem = elem;
	});

	return { minElem, maxElem };
};
