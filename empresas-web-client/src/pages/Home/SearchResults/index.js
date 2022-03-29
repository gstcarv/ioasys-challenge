import React from 'react';
import useSWR from 'swr';
import { SearchResultsContainer, NoResultsMessage, CenterContainer, EmptySearchMessage } from './styles';
import EnterpriseCard from './EnterpriseCard';
import { EnterpriseService } from '../../../services/entreprise';
import { useDebounce } from 'use-debounce';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useTheme } from 'styled-components';
import { darken } from 'polished';

function SearchResults({ search }) {
    // wait user end type to send request
    const [searchText] = useDebounce(search, 300);

    const theme = useTheme();

    const { data, isValidating } = useSWR(
        searchText ? ['enterprises', searchText] : null,
        async () => (await EnterpriseService.searchByName(searchText)).data
    );

    return (
        <SearchResultsContainer>
            {searchText && !data?.enterprises && (
                <SkeletonTheme
                    baseColor={darken(0.1, theme.colors.beige)}
                    highlightColor={darken(0.2, theme.colors.beige)}
                >
                    <Skeleton
                        count={5}
                        height={170}
                        style={{ marginBottom: theme.spacing[5] }}
                        borderRadius={theme.radii[2]}
                    />
                </SkeletonTheme>
            )}

            {!searchText && (
                <CenterContainer>
                    <EmptySearchMessage>Faça uma busca para iniciar.</EmptySearchMessage>
                </CenterContainer>
            )}

            {!isValidating && !!searchText && data?.enterprises.length === 0 && (
                <CenterContainer>
                    <NoResultsMessage>Nenhuma empresa foi encontrada para a busca realizada.</NoResultsMessage>
                </CenterContainer>
            )}

            {data?.enterprises?.map((e) => (
                <EnterpriseCard enterpriseData={e} key={e.id} />
            ))}
        </SearchResultsContainer>
    );
}

export default SearchResults;
