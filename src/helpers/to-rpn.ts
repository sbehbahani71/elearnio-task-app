import { shouldUnwindOperatorStack } from './should-unwind-operator-stack';

export function toRPN(tokens: (number | string)[]): (number | string)[] {
    const operators: string[] = [];
    const out: (number | string)[] = [];

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        if (typeof token === 'number') {
            out.push(token);
            continue;
        }

        if (/[+\-/*<>=^]/.test(token)) {
            while (shouldUnwindOperatorStack(operators, token)) {
                out.push(operators.pop() as string);
            }
            operators.push(token);
            continue;
        }

        if (token === '(') {
            operators.push(token);
            continue;
        }

        if (token === ')') {
            while (
                operators.length > 0 &&
                operators[operators.length - 1] !== '('
            ) {
                out.push(operators.pop() as string);
            }
            operators.pop();
            continue;
        }

        throw new Error(`Unparsed token ${ token } at position ${ i }`);
    }

    for (let i = operators.length - 1; i >= 0; i--) {
        out.push(operators[i]);
    }

    return out;
}
