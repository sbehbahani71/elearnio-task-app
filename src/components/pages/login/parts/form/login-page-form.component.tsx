import { FC } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useLogin } from '../../../../../hooks/login/use-login';

export const LoginPageFormComponent: FC = () => {
    const { form } = useLogin();

    return (
        <Box
            onSubmit={form.handleSubmit}
            component='form'
            noValidate
            sx={{ mt: 1 }}>
            <TextField
                margin='normal'
                required
                fullWidth
                value={form.values.username}
                onChange={form.handleChange}
                label='Username'
                name='username'
                autoFocus
                error={Boolean(form.errors.username)}
                helperText={form.errors.username}
            />
            <TextField
                margin='normal'
                required
                fullWidth
                value={form.values.password}
                onChange={form.handleChange}
                name='password'
                label='Password'
                type='password'
                error={Boolean(form.errors.password)}
                helperText={form.errors.password}
            />
            <Button
                disableElevation
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}>
                Sign In
            </Button>
        </Box>
    );
};
