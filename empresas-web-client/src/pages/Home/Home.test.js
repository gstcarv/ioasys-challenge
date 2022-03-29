import Home from '.';
import { renderWithRouter } from '../../utils/tests';

describe('<SearchResults />', () => {
    test('should render', () => {
        const { container } = renderWithRouter(<Home />);
        expect(container).toBeInTheDocument();
    });
});
