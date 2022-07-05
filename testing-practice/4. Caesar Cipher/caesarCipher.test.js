import { caesarCipher } from './caesarCipher';

describe('caecar cipher', () => {
	test('shift each character of the string by one', () => {
		expect(caesarCipher('abcd', 1)).toEqual('bcde');
	});
	test('exclude puntuations', () => {
		expect(caesarCipher('abcd!', 1)).toEqual('bcde!');
	});
	test('wrap z to a', () => {
		expect(caesarCipher('z', 1)).toEqual('a');
	});
	test('keep the case same', () => {
		expect(caesarCipher('AbzZ', 1)).toEqual('BcaA');
	});
	test('shift each char by k', () => {
		expect(caesarCipher('AbzZ', 5)).toEqual('FgeE');
	});
	test('key should be between 0 and 25', () => {
		expect(caesarCipher('abcd', 27)).toEqual(
			'Error: the key should be between 0 and 25',
		);
	});
});
