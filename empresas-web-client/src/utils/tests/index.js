import { render as defaultRender } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../config/theme';

export const render = (element) => {
    return defaultRender(<ThemeProvider theme={theme}>{element}</ThemeProvider>);
};

export const renderWithRouter = (element) => {
    return render(
        <MemoryRouter>
            <Routes>
                <Route path='/' element={element} />
            </Routes>
        </MemoryRouter>
    );
};
