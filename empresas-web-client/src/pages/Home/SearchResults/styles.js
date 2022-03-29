import styled from 'styled-components';
import { PageSpacedContainer } from '../../../config/globalStyles';

export const SearchResultsContainer = styled(PageSpacedContainer)`
    flex: 1;
    padding-top: ${({ theme }) => theme.spacing[7]}px;
`;

export const CenterContainer = styled.div`
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NoResultsMessage = styled.span`
    font-size: ${({ theme }) => theme.fontSize[5]}px;
    font-family: ${({ theme }) => theme.fonts.default};
    color: ${({ theme }) => theme.colors.greyish};
    font-weight: normal;
    margin-bottom: ${(props) => props.theme.spacing[2]}px;
    text-align: center;
`;

export const EmptySearchMessage = styled.span`
    font-size: ${({ theme }) => theme.fontSize[5]}px;
    font-family: ${({ theme }) => theme.fonts.default};
    color: ${({ theme }) => theme.colors.charcoalGrey[500]};
    font-weight: normal;
    margin-bottom: ${(props) => props.theme.spacing[2]}px;
    text-align: center;
`;
