import { fireEvent } from '@testing-library/react';
import { render } from '../../../utils/tests';
import Button from './';

describe('<Button />', () => {
    test('should button render with correct text passed on children', () => {
        const { getByText } = render(<Button>mock-title</Button>);
        expect(getByText('mock-title')).toBeInTheDocument();
    });

    test('should onClick prop be called on click button', () => {
        const onClickFn = jest.fn();
        const { getByText } = render(<Button onClick={onClickFn}>mock-title</Button>);

        const buttonElement = getByText('mock-title');

        fireEvent.click(buttonElement);

        expect(onClickFn).toBeCalled();
    });
});
