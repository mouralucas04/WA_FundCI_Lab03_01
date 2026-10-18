import { hello } from '../src/hello_world';

describe('test helloWorld', () => {
    it('should return hello world', () => {
        expect(hello()).toBe('Hello world!');
    });
});