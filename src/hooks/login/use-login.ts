import { useFormik } from 'formik';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export const useLogin = () => {
    const navigate = useNavigate();

    const form = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .min(3, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            password: Yup.string()
                .min(4, 'Too Short!')
                .required('Required'),       
        }),
        onSubmit: ({ username, password }) => {
            if(username === 'admin' && password === '1234') {
                toast.success('Welcome to calculator page');
                navigate('/calculator-page');
            } else {
                toast.error('Username or password is not correct !');
            }
        }
    });

    return {
        form,
    }
}