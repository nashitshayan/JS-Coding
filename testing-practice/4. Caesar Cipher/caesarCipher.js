export const caesarCipher = (str, k) => {
	if (k < 0 || k > 25) return 'Error: the key should be between 0 and 25';
	let charCodes = getCharCodes(str, k);
	return convertCodesToString(charCodes);
};

const convertCodesToString = (charCodes) =>
	charCodes.map((charCode) => String.fromCharCode(charCode)).join('');

const getCharCodes = (str, k) => {
	return str.split('').map((char) => {
		let code = char.charCodeAt(0);
		if (isAlpha(code)) {
			if (code === 122 || code === 90) return code - 26 + k;
			return code + k;
		}
		return code;
	});
};

const isAlpha = (char) =>
	(char >= 97 && char <= 122) || (char >= 65 && char <= 90);
