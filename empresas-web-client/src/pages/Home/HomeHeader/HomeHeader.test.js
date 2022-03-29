import { fireEvent } from '@testing-library/react';
import HomeHeader from '.';
import { render } from '../../../utils/tests';

describe('<HomeHeader />', () => {
    beforeEach(() => sessionStorage.setItem('search', ''));

    test('should render logo and search', () => {
        const { getByTestId } = render(<HomeHeader />);

        expect(getByTestId('app-logo')).toBeInTheDocument();
        expect(getByTestId('search-icon')).toBeInTheDocument();
    });

    function openSearch(getByTestId) {
        const searchButton = getByTestId('search-icon');
        fireEvent.click(searchButton);
    }

    test('should render search field after press search button', () => {
        const { getByTestId, getByPlaceholderText } = render(<HomeHeader />);

        openSearch(getByTestId);

        expect(getByPlaceholderText('Pesquisar')).toBeInTheDocument();
    });

    test('should call onSearch prop on change search value', () => {
        const onSearchFn = jest.fn();

        const { getByTestId, getByPlaceholderText } = render(<HomeHeader onSearch={onSearchFn} />);

        openSearch(getByTestId);

        const searchField = getByPlaceholderText('Pesquisar');
        fireEvent.change(searchField, { target: { value: 'mock-search' } });

        expect(onSearchFn).toBeCalledWith('mock-search');
    });

    test('should clear search on press close button', () => {
        const onSearchFn = jest.fn();

        const { getByTestId } = render(<HomeHeader onSearch={onSearchFn} />);

        openSearch(getByTestId);

        const clearButton = getByTestId('clear-search-icon');
        fireEvent.click(clearButton);

        expect(onSearchFn).toBeCalledWith('');
    });
});
