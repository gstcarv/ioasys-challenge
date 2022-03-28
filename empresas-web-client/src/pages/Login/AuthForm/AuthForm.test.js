import { fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { render, renderWithRouter } from '../../../utils/tests';
import AuthForm from './';

describe('<AuthForm />', () => {
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

    test('should call onUpdateLoginState on submit login', async () => {
        const onUpdateLoginState = jest.fn();

        const { getByPlaceholderText, getByText } = renderWithRouter(
            <AuthForm onUpdateLoginState={onUpdateLoginState} />
        );

        const { email, password } = getFields(getByPlaceholderText);

        const loginButton = getByText('Entrar');

        fireEvent.change(email, { target: { value: 'mock-email@email.com' } });
        fireEvent.change(password, { target: { value: '12341234' } });
        fireEvent.click(loginButton);

        await waitFor(() => {
            expect(onUpdateLoginState).toBeCalledWith(true);
        });
    });
});
