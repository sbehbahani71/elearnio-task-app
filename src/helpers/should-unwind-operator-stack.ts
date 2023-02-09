export function shouldUnwindOperatorStack(operators: string[], nextToken: string): boolean {
    const precedence: { [key: string]: number } = { '^': 3, '*': 2, '/': 2, '+': 1, '-': 1 };

    if (operators.length === 0) {
        return false;
    }

    const lastOperator = operators[operators.length - 1];
    return precedence[lastOperator] >= precedence[nextToken];
}
