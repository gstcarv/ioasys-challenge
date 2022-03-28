import { fireEvent } from '@testing-library/react';
import { render } from '../../../utils/tests';
import TextField from '.';

describe('<TextField />', () => {
    test('should render correctly', () => {
        const { container } = render(<TextField />);
        expect(container).toBeInTheDocument();
    });

    test('should render with correct icon', () => {
        const { getByText } = render(<TextField icon={<div>mock-icon</div>} />);
        expect(getByText('mock-icon')).toBeInTheDocument();
    });

    test('should call onChange prop on change input value', () => {
        const onChangeFn = jest.fn();

        const { getByTestId } = render(<TextField data-testid='field' onChange={onChangeFn} />);

        const inputField = getByTestId('field');

        fireEvent.change(inputField, { target: { value: 'mock-change-value' } });

        expect(onChangeFn).toBeCalled();
        expect(inputField.value).toBe('mock-change-value');
    });

    test('should render warning icon on field error', () => {
        const { getByTestId } = render(<TextField error='mock-error' />);
        expect(getByTestId('field-error-icon')).toBeInTheDocument();
    });

    test("warning icon shouldn't be rendered if field has no errors", () => {
        const { queryByTestId } = render(<TextField />);
        expect(queryByTestId('field-error-icon')).not.toBeInTheDocument();
    });

    test('should render password view button if input is password', () => {
        const { getByTestId } = render(<TextField type='password' />);
        expect(getByTestId('password-toggle-button')).toBeInTheDocument();
    });
});
