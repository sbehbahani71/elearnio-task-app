import { FC } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useCalculator } from '../../../../../hooks/calculator/use-calculator';

export const CalculatorPageFormComponent: FC = () => {
    const { inputHandler, value, calculate, result } = useCalculator();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    value={value}
                    onChange={(e) => inputHandler(e.target.value)}
                    fullWidth
                    label='Calculator'
                />
                {result && value && <Typography my={2}>Result: {result}</Typography>}
            </Grid>
            <Grid item xs={12}>
                <Button
                    fullWidth
                    disableElevation
                    variant='contained'
                    onClick={calculate}>
                    Show Result
                </Button>
            </Grid>
        </Grid>
    );
};
