import { FC } from 'react';
import { Container } from '@mui/material';
import { CalculatorPageFormComponent as Form } from './parts/form/calculator-page-form.component';
import { CalculatorPageHeaderComponent as Header } from './parts/header/calculate-page-header.component';

export const CalculatorPageComponent: FC = () => {
    return (
        <Container component='main' maxWidth='xs'>
            <Header />
            <Form />
        </Container>
    );
};
