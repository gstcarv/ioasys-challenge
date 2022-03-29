import { waitFor } from '@testing-library/react';
import SearchResults from '.';
import { render, renderWithRouter } from '../../../utils/tests';
import {
    mockHandleSearchEnterpriseEmptyRequest,
    mockHandleSearchEnterpriseSuccessRequest,
} from '../../../utils/tests/mocks/server/enterprise';

describe('<SearchResults />', () => {
    test('should render instructions if no search provided', () => {
        const { getByText } = render(<SearchResults search={''} />);

        expect(getByText(/Faça uma busca para iniciar/i)).toBeInTheDocument();
    });

    test('should render enterprise card on success search result', async () => {
        const { getByText } = renderWithRouter(<SearchResults search={'mock-search'} />);

        const { enterprises } = mockHandleSearchEnterpriseSuccessRequest();

        await waitFor(() => {
            enterprises.forEach((e) => {
                expect(getByText(e.country)).toBeInTheDocument();
                expect(getByText(e.enterprise_name)).toBeInTheDocument();
            });
        });
    });

    test('should render empty message if no results found', async () => {
        const { getByText } = renderWithRouter(<SearchResults search={'mock-search'} />);

        mockHandleSearchEnterpriseEmptyRequest();

        await waitFor(() => {
            expect(getByText(/Nenhuma empresa foi encontrada/i)).toBeInTheDocument();
        });
    });
});
