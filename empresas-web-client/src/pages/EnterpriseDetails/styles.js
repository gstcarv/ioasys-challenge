import styled from 'styled-components';

export const DetailsContainer = styled.div`
    background-color: #fff;
    border-radius: ${({ theme }) => theme.radii[2]}px;
    padding: ${({ theme }) => theme.spacing[8]}px;
    margin-top: ${({ theme }) => theme.spacing[7]}px;
    margin-bottom: ${(props) => props.theme.spacing[6]}px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: ${({ theme }) => theme.spacing[5]}px;
    }
`;

export const EnterpriseImage = styled.img`
    width: 100%;
`;

export const EnterpriseDescription = styled.p`
    font-size: ${({ theme }) => theme.fontSize[5]}px;
    font-family: ${({ theme }) => theme.fonts.default};
    color: ${({ theme }) => theme.colors.greyish};
    font-weight: normal;
    margin-bottom: ${(props) => props.theme.spacing[2]}px;
    line-height: 28px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: ${({ theme }) => theme.fontSize[3]}px;
        line-height: 24px;
    }
`;
