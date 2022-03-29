import { renderWithRouter } from '../../utils/tests';
import EnterpriseDetails from './';
import { mockHandleGetEnterpriseByIdSuccessRequest } from '../../utils/tests/mocks/server/enterprise';
import { getByAltText, waitFor } from '@testing-library/react';
import { baseDomain } from '../../services';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({ id: 'mock-id' }),
}));

describe('<EnterpriseDetails />', () => {
    beforeEach(() => {
        window.scrollTo = jest.fn();
    });

    test('should render loading if enterprise details not fetched yet', () => {
        mockHandleGetEnterpriseByIdSuccessRequest();

        const { getByTestId } = renderWithRouter(<EnterpriseDetails />);
        expect(getByTestId('enterprise-loading-skeleton')).toBeInTheDocument();
    });

    test('should render enterprise details after success fetch', async () => {
        const mock = mockHandleGetEnterpriseByIdSuccessRequest();

        const { getByText, getByAltText } = renderWithRouter(<EnterpriseDetails />);

        await waitFor(() => {
            expect(getByText(mock.description)).toBeInTheDocument();
            expect(getByAltText(/Imagem/i)).toBeInTheDocument();
            expect(getByAltText(/Imagem/i).src).toBe(`${baseDomain}/${mock.photo}`);
        });
    });
});
