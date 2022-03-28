import styled from 'styled-components';
import appLogo from '../../assets/images/logo-home.png';

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: 100vh;
    flex-direction: column;
`;

export const AppLogo = styled.img.attrs({
    src: appLogo,
})`
    width: 200px;
    margin-bottom: ${({ theme }) => theme.spacing[7]}px;
`;

export const GreetingsContainer = styled.div`
    width: 300px;
    text-align: center;
`;

export const WelcomeText = styled.h1`
    font-size: ${({ theme }) => theme.fontSize[5]}px;
    font-family: ${({ theme }) => theme.fonts.default};
    color: ${({ theme }) => theme.colors.charcoalGrey[500]};
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: ${({ theme }) => theme.spacing[5]}px;
`;

export const GreetingsDescriptionText = styled.p`
    font-size: ${({ theme }) => theme.fontSize[2]}px;
    font-family: ${({ theme }) => theme.fonts.default};
    color: ${({ theme }) => theme.colors.charcoalGrey[500]};
    font-weight: 400;
    margin-bottom: ${({ theme }) => theme.spacing[7]}px;
`;
