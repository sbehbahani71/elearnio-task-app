import { useFormik } from 'formik';
import * as Yup from 'yup';

export const useLogin = () => {
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
                .min(8, 'Too Short!')
                .required('Required'),       
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return {
        form,
    }
}