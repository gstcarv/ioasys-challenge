import React, { useState } from 'react';
import WhiteLogo from '../../../assets/images/logo-white.png';
import { Icon } from '../../../components/Common';
import { Container, SearchField } from './styles';

function HomeHeader({ searchValue, onSearch }) {
    const [isSearching, setIsSearching] = useState(!!sessionStorage.getItem('search'));

    return (
        <Container>
            {!isSearching && (
                <>
                    <a href='https://bitbucket.org/gstcarv/empresas-web' target={'_blank'}>
                        <Icon.BitBucket size={28} color='#fff' />
                    </a>
                    <img src={WhiteLogo} width={130} data-testid='app-logo' />
                    <Icon.Search
                        width={35}
                        style={{ cursor: 'pointer' }}
                        onClick={() => setIsSearching(true)}
                        data-testid='search-icon'
                    />
                </>
            )}

            {isSearching && (
                <SearchField
                    placeholder='Pesquisar'
                    icon={<Icon.Search width={35} />}
                    value={searchValue}
                    onChange={(e) => {
                        sessionStorage.setItem('search', e.target.value);
                        onSearch(e.target.value);
                    }}
                    rightIcon={
                        <Icon.Close
                            width={35}
                            style={{ cursor: 'pointer' }}
                            onClick={() => onSearch('')}
                            data-testid='clear-search-icon'
                        />
                    }
                />
            )}
        </Container>
    );
}

export default HomeHeader;
