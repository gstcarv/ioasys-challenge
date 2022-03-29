import React, { useState } from 'react';
import HomeHeader from './HomeHeader';
import SearchResults from './SearchResults';
import { Container } from './styles';

function Home() {
    const [isSearching, setIsSearching] = useState(false);

    const [searchValue, setSearchValue] = useState('');

    return (
        <Container>
            <HomeHeader searchValue={searchValue} onSearch={setSearchValue} />

            <SearchResults search={searchValue} />
        </Container>
    );
}

export default Home;
