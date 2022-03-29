import styled from 'styled-components';
import { darken } from 'polished';
import { PageSpacedContainer } from '../../config/globalStyles';

export const Container = styled(PageSpacedContainer)`
    height: 80px;
    background: linear-gradient(
        180deg,
        ${({ theme }) => theme.colors.rouge} 0%,
        ${({ theme }) => darken(0.15, theme.colors.rouge)} 86%
    );
`;
