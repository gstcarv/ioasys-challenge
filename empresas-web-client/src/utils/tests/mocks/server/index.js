import { setupServer } from 'msw/node';
import { api } from '../../../../services';

const server = setupServer();

export const baseApiUrl = (path) => `${api.defaults.baseURL}${path}`;

export { server };
