import styled from 'styled-components';
import { darken } from 'polished';

export const ButtonContainer = styled.button`
    width: 100%;
    height: 52px;
    font-size: ${({ theme }) => theme.fontSize[3]}px;
    font-family: ${({ theme }) => theme.fonts.default};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.greenyBlue};
    border-radius: ${({ theme }) => theme.radii[1]}px;
    text-transform: uppercase;
    font-weight: 500;
    border: none;
    cursor: pointer;
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    pointer-events: ${(props) => (props.disabled ? 'none' : 'initial')};
    transition: background-color 0.1s, opacity 0.1s;

    :hover {
        background-color: ${({ theme }) => darken(0.08, theme.colors.greenyBlue)};
    }
`;
