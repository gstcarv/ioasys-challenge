import { render as defaultRender } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { SWRConfig } from 'swr';
import { theme } from '../../config/theme';
import { AuthProvider } from '../../contexts/AuthContext';

export const render = (element) => {
    return defaultRender(
        <SWRConfig
            value={{
                // disable SWR cache for testing better
                provider: () => new Map(),
            }}
        >
            <ThemeProvider theme={theme}>{element}</ThemeProvider>
        </SWRConfig>
    );
};

export const renderWithRouter = (element) => {
    return render(
        <AuthProvider>
            <MemoryRouter>
                <Routes>
                    <Route path='/' element={element} />
                </Routes>
            </MemoryRouter>
        </AuthProvider>
    );
};
