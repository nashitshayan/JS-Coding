import { reverseString } from './reverseString';

test('reverse the string', () => {
	expect(reverseString('hello')).toEqual('olleh');
});
