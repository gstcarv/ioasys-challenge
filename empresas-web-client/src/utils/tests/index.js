import { render as defaultRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../config/theme';

export const render = (element) => {
    return defaultRender(<ThemeProvider theme={theme}>{element}</ThemeProvider>);
};
