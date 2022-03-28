import styled from 'styled-components';
import { Button } from '../../../components/Common';

export const AuthFormContainer = styled.div`
    width: 370px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LoginButton = styled(Button)`
    width: 90%;
    margin-top: ${({ theme }) => theme.spacing[7]}px;
`;
