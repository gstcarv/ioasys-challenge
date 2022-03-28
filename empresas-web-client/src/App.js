import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './config/theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div></div>
        </ThemeProvider>
    );
}

export default App;
