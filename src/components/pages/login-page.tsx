import { FC, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLogin } from '../../hooks/login/use-login';

const theme = createTheme();

export const LoginPage: FC = () => {
    const { form } = useLogin();

    return (
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Login
                    </Typography>
                    '
                    <Box
                        onSubmit={form.handleSubmit}
                        component='form'
                        noValidate
                        sx={{ mt: 1 }}>
                        <TextField
                            defaultValue={'admin'}
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
                            defaultValue={'1234'}
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
                </Box>
            </Container>
        </ThemeProvider>
    );
};
