import React from 'react';
import { AuthFormContainer, LoginButton } from './styles';
import { Icon, TextField } from '../../../components/Common';
import { useTheme } from 'styled-components';

function AuthForm() {
    const theme = useTheme();

    return (
        <AuthFormContainer>
            <TextField icon={<Icon.Mail width={30} />} placeholder='E-mail' type='email' />

            <TextField
                icon={<Icon.Lock width={25} />}
                placeholder='Senha'
                type='password'
                style={{
                    marginTop: theme.spacing[6],
                }}
            />

            <LoginButton>Entrar</LoginButton>
        </AuthFormContainer>
    );
}

export default AuthForm;
