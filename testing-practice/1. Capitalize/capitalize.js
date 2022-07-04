export const capitalize = (str) => {
	let tempStr = str.split('');
	tempStr[0] = tempStr[0].toUpperCase();
	return tempStr.join('');
};
