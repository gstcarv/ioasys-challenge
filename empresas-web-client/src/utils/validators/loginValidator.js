import * as yup from 'yup';
import { pt } from 'yup-locale-pt';

yup.setLocale(pt);

export const loginSchema = yup.object().shape({
    email: yup.string().email().min(4).label('E-mail'),
    password: yup.string().min(4).label('Senha'),
});
