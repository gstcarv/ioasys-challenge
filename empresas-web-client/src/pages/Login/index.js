import React from 'react';
import { LoginContainer, AppLogo, GreetingsContainer, WelcomeText, GreetingsDescriptionText } from './styles';
import AuthForm from './AuthForm';

function Login() {
    return (
        <LoginContainer>
            <AppLogo />

            <GreetingsContainer>
                <WelcomeText>
                    Bem-vindo ao <br /> empresas
                </WelcomeText>
                <GreetingsDescriptionText>
                    Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.
                </GreetingsDescriptionText>
            </GreetingsContainer>

            <AuthForm />
        </LoginContainer>
    );
}

export default Login;
