import { fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../../../utils/tests';
import EnterpriseHeader from './';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

describe('<EnterpriseHeader />', () => {
    test('should render page enterprise name passed on props', () => {
        const { getByText } = renderWithRouter(<EnterpriseHeader name={'mock-page-name'} />);
        expect(getByText('mock-page-name')).toBeInTheDocument();
    });

    test('should back route when click on back button', () => {
        const { getByTestId } = renderWithRouter(<EnterpriseHeader name={'mock-page-name'} />);

        const backButton = getByTestId('back-button');
        fireEvent.click(backButton);

        expect(mockUseNavigate).toBeCalledWith(-1);
    });
});
