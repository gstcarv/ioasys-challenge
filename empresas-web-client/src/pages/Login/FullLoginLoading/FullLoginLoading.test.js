import { render } from '../../../utils/tests';
import FullLoginLoading from './';

describe('<FullLoginLoading />', () => {
    test('should render if prop show is true', () => {
        const { container } = render(<FullLoginLoading show={true} />);
        expect(container).toBeInTheDocument();
    });
});
