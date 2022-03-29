import Login from '.';
import { render, renderWithRouter } from '../../utils/tests';

describe('<Login />', () => {
    test('should render with greeting texts', () => {
        const { getByText } = renderWithRouter(<Login />);

        expect(getByText('Bem-vindo ao empresas')).toBeInTheDocument();
        expect(getByText('Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.')).toBeInTheDocument();
    });
});
