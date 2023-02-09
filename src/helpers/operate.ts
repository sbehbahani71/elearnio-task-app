export function operate(operator: string, stack: number[]): number {
    const a = stack.pop() as number;
    const b = stack.pop() as number;

    switch (operator) {
        case '+':
            return b + a;
        case '-':
            return b - a;
        case '*':
            return b * a;
        case '/':
            return b / a;
        case '^':
            return Math.pow(b, a);
        default:
            throw new Error(`Invalid operator: ${ operator }`);
    }
}
