import { evalRPN } from './eval-rpn';
import { toRPN } from './to-rpn';
import { tokenize } from './tokenize';

export function evaluate(input: string): number {
    return evalRPN(toRPN(tokenize(input)));
}