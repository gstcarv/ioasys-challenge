import React, { useState } from 'react';
import { LoginContainer, AppLogo, GreetingsContainer, WelcomeText, GreetingsDescriptionText } from './styles';
import AuthForm from './AuthForm';
import FullLoginLoading from './FullLoginLoading';

function Login() {
    const [isLogging, setIsLogging] = useState(false);

    return (
        <>
            <FullLoginLoading show={isLogging} />
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

                <AuthForm onUpdateLoginState={setIsLogging} />
            </LoginContainer>
        </>
    );
}

export default Login;
