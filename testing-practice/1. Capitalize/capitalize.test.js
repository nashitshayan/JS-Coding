import { capitalize } from './capitalize';

describe('capitalize', () => {
	test('capitalizes first letter of a string', () => {
		expect(capitalize('hello')).toEqual('Hello');
	});
});
