import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
    test.skip('should render correctly', () => {
        const { container } = render(<App />);
        expect(container).toBeInTheDocument();
    });
});
