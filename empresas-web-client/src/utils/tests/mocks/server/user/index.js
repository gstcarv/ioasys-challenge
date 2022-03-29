import { baseApiUrl, server } from '..';
import { rest } from 'msw';

export const mockHandleLoginSuccessRequest = () => {
    server.use(
        rest.post(baseApiUrl('/users/auth/sign_in'), (req, res, ctx) =>
            res(ctx.status(200), ctx.delay(300), ctx.json({}))
        )
    );
};

export const mockHandleLoginErrorRequest = () => {
    server.use(
        rest.post(baseApiUrl('/users/auth/sign_in'), (req, res, ctx) =>
            res(ctx.status(401), ctx.delay(200), ctx.json(undefined))
        )
    );
};
