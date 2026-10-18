import { hello } from '../src/hello_world';

describe('test helloWorld', () => {
    it('should return hello world', () => {
        expect(hello()).toBe('Hello world!');
    });
    
    it('should return hello with WebAcademy', () => {
        expect(hello('WebAcademy')).toBe('Hello WebAcademy!');
    });
});