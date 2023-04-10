import compose from './compose';
import _ from 'lodash'

describe('welcome function', () => {
    it('should return a greeting with exclamation mark', () => {
        const greet = (name: string): string => `hi: ${name}`;
        const exclaim = (statement: string): string => `${statement.toUpperCase()}!`;
        const welcome = compose(greet, exclaim);

        expect(welcome('moe')).toBe('hi: MOE!');
    });

    it('should return a greeting with exclamation mark', () => {
        const greet = (name: string): string => `hi: ${name}`;
        const bye = (name: string): string => `bye: ${name}`;
        const exclaim = (statement: string): string => `${statement.toUpperCase()}!`;
        const welcome = compose(
            bye, // 3 bye: hi: MOE!
            greet, // 2 hi: MOE!
            exclaim // 1 moe -> MOE!
        );
        expect(welcome('moe')).toBe('bye: hi: MOE!');
    });
});
