import { FC } from 'react';
import { Container } from '@mui/material';
import { LoginPageFormComponent as Form } from './parts/form/login-page-form.component';
import { LoginPageHeaderComponent as Header } from './parts/header/login-page-header.component';
import { LoginPageStyle as S } from './login-page.style';

export const LoginPageComponent: FC = () => {
    return (
        <Container component='main' maxWidth='xs'>
            <S.FormWrapper>
                <Header />
                <Form />
            </S.FormWrapper>
        </Container>
    );
};
