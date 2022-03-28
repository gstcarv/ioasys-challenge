import { render } from '../../../utils/tests';
import Icon from './';

describe('<Icon />', () => {
    test('should render icon correctly', () => {
        const { container } = render(<Icon.Mail />);
        expect(container).toBeInTheDocument();
    });
});
