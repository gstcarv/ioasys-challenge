import { render } from '../../../utils/tests';
import AuthForm from './';

describe('<AuthForm />', () => {
    test('should render login fields and login button', () => {
        const { getByPlaceholderText } = render(<AuthForm />);

        expect(getByPlaceholderText('E-mail')).toBeInTheDocument();
        expect(getByPlaceholderText('Senha')).toBeInTheDocument();
    });
});
