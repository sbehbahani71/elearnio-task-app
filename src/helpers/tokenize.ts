export function tokenize(input: string): (number | string)[] {
    let scanner = 0;
    const tokens: (number | string)[] = [];

    while (scanner < input.length) {
        const char = input[scanner];

        if (/[0-9]/.test(char)) {
            let digits = '';

            while (
                scanner < input.length &&
                /[0-9\.]/.test(input[scanner])
            ) {
                digits += input[scanner++];
            }

            const number = parseFloat(digits);
            tokens.push(number);
            continue;
        }

        if (/[+\-/*()^]/.test(char)) {
            tokens.push(char);
            scanner++;
            continue;
        }

        if (char === ' ') {
            scanner++;
            continue;
        }

        throw new Error(`Invalid token ${ char } at position ${ scanner }`);
    }

    return tokens;
}
