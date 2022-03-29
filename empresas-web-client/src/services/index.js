import axios from 'axios';
import { UserStorage } from '../utils/storage/userStorage';

export const baseDomain = 'https://empresas.ioasys.com.br';

const api = axios.create({
    baseURL: baseDomain + '/api/v1',
});

api.interceptors.request.use((config) => {
    const user = UserStorage.getLoginInformation();

    if (user) {
        const auth = user.auth;

        config.headers['uid'] = auth.uid;
        config.headers['client'] = auth.client;
        config.headers['access-token'] = auth['access-token'];
    }

    return config;
}, Promise.reject);

export { api };
