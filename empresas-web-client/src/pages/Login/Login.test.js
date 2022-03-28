import Login from '.';
import { render } from '../../utils/tests';

describe('<Login />', () => {
    test('should render with greeting texts', () => {
        const { getByText } = render(<Login />);

        expect(getByText('Bem-vindo ao empresas')).toBeInTheDocument();
        expect(getByText('Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.')).toBeInTheDocument();
    });
});
