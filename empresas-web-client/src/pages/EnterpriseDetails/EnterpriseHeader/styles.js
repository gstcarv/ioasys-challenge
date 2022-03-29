import styled from 'styled-components';
import GradientHeader from '../../../components/GradientHeader';

export const Container = styled(GradientHeader)`
    display: flex;
    align-items: center;
`;

export const EnterpriseName = styled.span`
    font-size: ${({ theme }) => theme.fontSize[5]}px;
    font-family: ${({ theme }) => theme.fonts.default};
    color: ${({ theme }) => theme.colors.white};
    font-weight: normal;
    text-transform: uppercase;
    margin-left: ${(props) => props.theme.spacing[6]}px;
`;
