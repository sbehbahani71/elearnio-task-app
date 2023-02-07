import { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { useLoginValidation } from './use-login-validation';

export const useLogin = () => {
    const { errors, isValid } = useLoginValidation();
    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const updateField = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        isValid({...form, [e.target.name]: e.target.value});
        setForm(prevForm => ({...prevForm, [e.target.name]: e.target.value}));
    }, [form]);

    const submit = (e:FormEvent<HTMLFormElement>) => {
        const isFormValid = isValid(form);

        if(isFormValid) alert('LOGIN')
        else e.preventDefault(); 
    };

    return {
        updateField,
        form,
        submit,
        errors
    }
}