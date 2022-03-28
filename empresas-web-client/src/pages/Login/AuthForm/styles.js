import styled from 'styled-components';
import { Button } from '../../../components/Common';

export const AuthFormContainer = styled.form`
    width: 370px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LoginErrorLabel = styled.span`
    font-size: ${({ theme }) => theme.fontSize[1]}px;
    color: ${({ theme }) => theme.colors.neonRed};
    text-align: center;
    margin: ${({ theme }) => theme.spacing[5]}px 0;
    opacity: ${(props) => (props.show ? 1 : 0)};
`;

export const LoginButton = styled(Button)`
    width: 90%;
`;
