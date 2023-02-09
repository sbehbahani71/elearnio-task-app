import { useCallback, useState } from 'react';
import { evaluate } from '../../helpers/evaluate';

export const useCalculator = () => {
    const [value, setValue] = useState<string>('');
    const [result, setResult] = useState<number | null>();

    const inputHandler = useCallback((input: string) => {
        setValue(input);
    }, []);
    
    const calculate = useCallback(() => {
        const evaluated = evaluate(value);
        setResult(evaluated);
    }, [value]);

    return {
        value,
        result,
        inputHandler,
        calculate
    }
};