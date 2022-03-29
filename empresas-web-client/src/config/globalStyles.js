import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: ${({ theme }) => theme.colors.beige};
        font-family: Roboto, Sans-Serif;
    }
`;

export const PageSpacedContainer = styled.div`
    padding-left: 20%;
    padding-right: 20%;
`;

export default GlobalStyle;
