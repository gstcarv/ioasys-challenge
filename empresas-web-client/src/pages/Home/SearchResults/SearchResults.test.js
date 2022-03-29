import SearchResults from '.';
import { render } from '../../../utils/tests';

describe('<SearchResults />', () => {
    test('should render instructions if no search provided', () => {
        const { getByText } = render(<SearchResults search={''} />);

        expect(getByText('Faça uma busca para iniciar.')).toBeInTheDocument();
    });
});
