import axios from 'axios';

import { ILoginInput } from '../entities/login-input';
import { ILogin } from '../entities/login';

export const loginService = async (input: ILoginInput) => {
    const request = await axios.post<ILogin>('/login', input);
    const response = request.data;
    return response;
};

