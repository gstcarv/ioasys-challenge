import { api } from '..';

export const UserService = {
    /**
     * Authorize user to application
     * @param email user's email
     * @param password user's password
     * @returns user auth information
     */
    login: (email, password) => api.post('users/auth/sign_in', { email, password }),
};
