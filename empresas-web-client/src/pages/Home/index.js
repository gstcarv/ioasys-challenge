import React, { useState } from 'react';
import WhiteLogo from '../../assets/images/logo-white.png';
import { Icon } from '../../components/Common';
import HomeHeader from './HomeHeader';

function Home() {
    const [isSearching, setIsSearching] = useState(false);

    const [searchValue, setSearchValue] = useState('');

    return (
        <div>
            <HomeHeader searchValue={searchValue} onSearch={setSearchValue} />
        </div>
    );
}

export default Home;
