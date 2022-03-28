import React, { useState } from 'react';
import { AuthFormContainer, LoginButton, LoginErrorLabel } from './styles';
import { Icon, TextField } from '../../../components/Common';
import { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../../utils/validators/loginValidator';
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function AuthForm({ onUpdateLoginState }) {
    const navigate = useNavigate();

    const theme = useTheme();

    const { signIn } = useAuth();

    const [hasCredentialsErrors, setHasCredentialsErrors] = useState(false);

    const { register, formState, watch, handleSubmit } = useForm({
        defaultValues: { email: '', password: '' },
        resolver: yupResolver(loginSchema),
        mode: 'onSubmit',
    });

    async function handleLoginSubmit({ email, password }) {
        try {
            setHasCredentialsErrors(false);
            onUpdateLoginState(true);

            await signIn(email, password);

            return navigate('/');
        } catch (err) {
            setHasCredentialsErrors(true);
        } finally {
            onUpdateLoginState(false);
        }
    }

    return (
        <AuthFormContainer onSubmit={handleSubmit(handleLoginSubmit)}>
            <TextField
                icon={<Icon.Mail width={30} />}
                placeholder='E-mail'
                type='email'
                {...register('email')}
                error={formState.errors.email?.message}
            />

            <TextField
                icon={<Icon.Lock width={25} />}
                placeholder='Senha'
                type='password'
                style={{ marginTop: theme.spacing[6] }}
                error={formState.errors.password?.message}
                {...register('password')}
            />

            <LoginErrorLabel show={hasCredentialsErrors}>
                Credenciais informadas são inválidas, tente novamente.
            </LoginErrorLabel>

            <LoginButton type='submit' disabled={formState.isSubmitted && !formState.isValid}>
                Entrar
            </LoginButton>
        </AuthFormContainer>
    );
}

export default AuthForm;
