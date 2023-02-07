import { useState } from 'react';
import { ILoginInput } from '../../entities/login-input';

export const useLoginValidation = () => {
    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });

    const isValid = (data: ILoginInput) => {
        
        // Check username
        if(data.username.length < 1) {
            setErrors({ username: 'error username', password: ''});
            return false;
        };

        // Check Password
        if(data.password.length < 1) {
            setErrors({ password: 'error password', username: '' });
            return false;
        }

        setErrors({ password: '', username: '' });
        return true;
    };

    return {
        isValid,
        errors
    };
}