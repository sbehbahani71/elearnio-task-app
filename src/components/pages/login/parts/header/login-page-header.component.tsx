import { FC } from 'react';
import { Avatar, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';

export const LoginPageHeaderComponent: FC = () => {
    return (
        <>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlined />
            </Avatar>
            <Typography component='h1' variant='h5'>
                Login
            </Typography>
        </>
    );
};
