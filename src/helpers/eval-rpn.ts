import { operate } from './operate';

export function evalRPN(rpn: (number | string)[]): number {
    const stack: number[] = [];

    for (let i = 0; i < rpn.length; i++) {
        const token = rpn[i];

        if (/[+\-/*^]/.test(token as string)) {
            stack.push(operate(token as string, stack));
            continue;
        }

        // token is a number
        stack.push(token as number);
    }

    return stack.pop() as number;
}
