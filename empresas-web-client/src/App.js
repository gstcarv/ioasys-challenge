import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './config/globalStyles';
import BaseRoutes from './config/routes/BaseRoutes';
import { theme } from './config/theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BaseRoutes />

            <GlobalStyle />
        </ThemeProvider>
    );
}

export default App;
