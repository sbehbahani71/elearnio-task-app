import { FC } from 'react';
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
  const { updateField, form, submit, errors } = useLogin();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>'
          <form onSubmit={e => e.preventDefault} action=""></form>
          <Box onSubmit={submit} component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={form.username}
              onChange={updateField}
              label="Username"
              name="username"
              autoFocus
              error={errors.username.length > 0}
              helperText={errors.username}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={form.password}
              onChange={updateField}
              name="password"
              label="Password"
              type="password"
              error={errors.password.length > 0}
              helperText={errors.password}
            />
            <Button
              disableElevation
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}