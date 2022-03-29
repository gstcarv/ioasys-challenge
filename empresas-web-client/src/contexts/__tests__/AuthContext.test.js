import { AuthProvider, useAuth } from '../AuthContext';
import { render, waitFor } from '@testing-library/react';
import { useEffect } from 'react';
import { mockHandleLoginSuccessRequest } from '../../utils/tests/mocks/server/user';
import { UserStorage } from '../../utils/storage/userStorage';

describe('AuthContext', () => {
    test('user should be signed out on first render', () => {
        const FakeChild = () => {
            const { user } = useAuth();
            return <div>{user ? 'signed' : 'signed out'}</div>;
        };

        const { getByText } = render(
            <AuthProvider>
                <FakeChild></FakeChild>
            </AuthProvider>
        );

        expect(getByText('signed out')).toBeInTheDocument();
    });

    test('user should be set after login success', async () => {
        const FakeLoginChild = () => {
            const { user, signIn } = useAuth();

            useEffect(() => {
                signIn('mock-email', 'mock-password');
            }, []);

            return <div>{user ? 'signed' : 'signed out'}</div>;
        };

        mockHandleLoginSuccessRequest();

        const mockSaveLoginFn = jest.fn();

        jest.spyOn(UserStorage, 'saveLoginInformation').mockImplementation(mockSaveLoginFn);

        const { getByText } = render(
            <AuthProvider>
                <FakeLoginChild></FakeLoginChild>
            </AuthProvider>
        );

        await waitFor(() => {
            expect(getByText('signed')).toBeInTheDocument();
            expect(mockSaveLoginFn).toBeCalled();
        });
    });
});
