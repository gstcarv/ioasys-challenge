import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './config/globalStyles';
import BaseRoutes from './config/routes/BaseRoutes';
import { theme } from './config/theme';
import { AuthProvider } from './contexts/AuthContext';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <BaseRoutes />
            </AuthProvider>

            <GlobalStyle />
        </ThemeProvider>
    );
}

export default App;
