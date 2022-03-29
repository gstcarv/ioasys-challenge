import { fireEvent } from '@testing-library/react';
import EnterpriseCard from '.';
import { renderWithRouter } from '../../../../utils/tests';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

describe('<EnterpriseCard />', () => {
    test('should render the card with correct data', () => {
        const mockEnterprise = {
            country: 'UK',
            enterprise_name: 'Fluoretiq Limited',
            enterprise_type: { id: 3, enterprise_type_name: 'Health' },
        };

        const { getByText } = renderWithRouter(<EnterpriseCard enterpriseData={mockEnterprise} />);

        expect(getByText(mockEnterprise.country)).toBeInTheDocument();
        expect(getByText(mockEnterprise.enterprise_name)).toBeInTheDocument();
        expect(getByText(mockEnterprise.enterprise_type.enterprise_type_name)).toBeInTheDocument();
    });

    test('should go to enterprise details on card click', () => {
        const mockEnterprise = {
            id: 'mock-id',
            country: 'UK',
            enterprise_name: 'Fluoretiq Limited',
            enterprise_type: { id: 3, enterprise_type_name: 'Health' },
        };

        const { getByTestId } = renderWithRouter(<EnterpriseCard enterpriseData={mockEnterprise} />);

        fireEvent.click(getByTestId('enterprise-card'));

        expect(mockUseNavigate).toBeCalledWith('enterprise/mock-id');
    });
});
