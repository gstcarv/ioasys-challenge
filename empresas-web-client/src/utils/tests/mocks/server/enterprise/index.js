import { baseApiUrl, server } from '..';
import { rest } from 'msw';

export const mockData = {
    enterprises: [
        {
            id: 1,
            country: 'UK',
            enterprise_name: 'Fluoretiq Limited',
            enterprise_type: { id: 3, enterprise_type_name: 'Health' },
            description: 'lorem ipsum dolor sit amet',
            photo: 'photo-mock.png',
        },
        {
            id: 2,
            country: 'BR',
            enterprise_name: 'Assetvault',
            enterprise_type: { id: 2, enterprise_type_name: 'Fintech' },
        },
        {
            id: 3,
            country: 'AG',
            enterprise_name: 'Delphisonic',
            enterprise_type: { id: 26, enterprise_type_name: 'IoT' },
        },
    ],
};

export const mockHandleSearchEnterpriseSuccessRequest = () => {
    server.use(
        rest.get(baseApiUrl('/enterprises'), (req, res, ctx) =>
            res(ctx.status(200), ctx.delay(300), ctx.json(mockData))
        )
    );

    return mockData;
};

export const mockHandleSearchEnterpriseEmptyRequest = () => {
    server.use(
        rest.get(baseApiUrl('/enterprises'), (req, res, ctx) =>
            res(
                ctx.status(200),
                ctx.delay(200),
                ctx.json({
                    enterprises: [],
                })
            )
        )
    );
};

export const mockHandleGetEnterpriseByIdSuccessRequest = () => {
    server.use(
        rest.get(baseApiUrl('/enterprises/:id'), (req, res, ctx) =>
            res(
                ctx.status(200),
                ctx.delay(200),
                ctx.json({
                    enterprise: mockData.enterprises[0],
                })
            )
        )
    );

    return mockData.enterprises[0];
};
