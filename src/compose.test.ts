import compose from './compose';

describe('welcome function', () => {
    it('should return a greeting with exclamation mark', () => {
        const greet = (name: string): string => `hi: ${name}`;
        const exclaim = (statement: string): string => `${statement.toUpperCase()}!`;
        const welcome = compose(greet, exclaim);

        expect(welcome('moe')).toBe('hi: MOE!');
    });
});
