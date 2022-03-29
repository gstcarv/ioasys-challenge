import EnterpriseCard from '.';
import { render } from '../../../../utils/tests';

describe('<EnterpriseCard />', () => {
    test('should render the card with correct data', () => {
        const mockEnterprise = {
            country: 'UK',
            enterprise_name: 'Fluoretiq Limited',
            enterprise_type: { id: 3, enterprise_type_name: 'Health' },
        };

        const { getByText } = render(<EnterpriseCard enterpriseData={mockEnterprise} />);

        expect(getByText(mockEnterprise.country)).toBeInTheDocument();
        expect(getByText(mockEnterprise.enterprise_name)).toBeInTheDocument();
        expect(getByText(mockEnterprise.enterprise_type.enterprise_type_name)).toBeInTheDocument();
    });
});
