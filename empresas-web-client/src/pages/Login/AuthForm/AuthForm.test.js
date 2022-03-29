import { act, fireEvent, waitFor } from '@testing-library/react';
import { renderWithRouter } from '../../../utils/tests';
import { mockHandleLoginErrorRequest, mockHandleLoginSuccessRequest } from '../../../utils/tests/mocks/server/user';
import AuthForm from './';

import * as AuthContext from '../../../contexts/AuthContext';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

describe('<AuthForm />', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });

    const getFields = (getByPlaceholderText) => ({
        email: getByPlaceholderText('E-mail'),
        password: getByPlaceholderText('Senha'),
    });

    test('should render login fields and login button', () => {
        const { getByPlaceholderText } = renderWithRouter(<AuthForm />);

        const { email, password } = getFields(getByPlaceholderText);

        expect(email).toBeInTheDocument();
        expect(password).toBeInTheDocument();
    });

    test('login button should be disabled if submit and form is not valid', async () => {
        const { getByText } = renderWithRouter(<AuthForm />);

        const loginButton = getByText('Entrar');

        fireEvent.click(loginButton);

        await waitFor(() => {
            expect(loginButton).toBeDisabled();
        });
    });

    function submitLoginForm(email, password, loginButton) {
        fireEvent.change(email, { target: { value: 'mock-email@email.com' } });
        fireEvent.change(password, { target: { value: '12341234' } });
        fireEvent.click(loginButton);
    }

    test('should call onUpdateLoginState on submit login', async () => {
        const onUpdateLoginState = jest.fn();

        jest.spyOn(AuthContext, 'useAuth').mockImplementation(() => ({ signIn: jest.fn }));

        const { getByPlaceholderText, getByText } = renderWithRouter(
            <AuthForm onUpdateLoginState={onUpdateLoginState} />
        );

        const { email, password } = getFields(getByPlaceholderText);
        const loginButton = getByText('Entrar');
        submitLoginForm(email, password, loginButton);

        await act(async () => {
            await waitFor(() => {
                expect(onUpdateLoginState).toBeCalledWith(true);
            });
        });
    });

    test('should show invalid credentials label if error on login request', async () => {
        const { getByPlaceholderText, getByText } = renderWithRouter(<AuthForm onUpdateLoginState={jest.fn} />);

        mockHandleLoginErrorRequest();

        const { email, password } = getFields(getByPlaceholderText);
        const loginButton = getByText('Entrar');
        submitLoginForm(email, password, loginButton);

        await waitFor(() => {
            expect(getByText('Credenciais informadas são inválidas, tente novamente.')).toBeVisible();
        });
    });

    test('should go to home page on login success', async () => {
        const { getByPlaceholderText, getByText } = renderWithRouter(<AuthForm onUpdateLoginState={jest.fn} />);

        mockHandleLoginSuccessRequest();

        const { email, password } = getFields(getByPlaceholderText);
        const loginButton = getByText('Entrar');
        submitLoginForm(email, password, loginButton);

        await waitFor(() => {
            expect(mockUseNavigate).toBeCalledWith('/');
        });
    });
});
