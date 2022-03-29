import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.colors.white};
    padding: ${(props) => props.theme.spacing[5]}px;
    border-radius: ${(props) => props.theme.radii[3]}px;
    margin-bottom: ${(props) => props.theme.spacing[7]}px;
    cursor: pointer;
    transition: 0.1s;
    height: 150px;

    :hover {
        background-color: #f2f2f2;
    }
`;

export const EnterpriseImage = styled.img`
    width: 250px;
`;

export const EnterpriseInformation = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: ${(props) => props.theme.spacing[6]}px;
`;

export const EnterpriseTitle = styled.span`
    font-size: ${({ theme }) => theme.fontSize[7]}px;
    font-family: ${({ theme }) => theme.fonts.default};
    color: ${({ theme }) => theme.colors.darkIndigo};
    font-weight: 600;
    margin-bottom: ${(props) => props.theme.spacing[2]}px;
    margin-top: ${(props) => props.theme.spacing[4]}px;
`;

export const EnterpriseType = styled.span`
    font-size: ${({ theme }) => theme.fontSize[5]}px;
    font-family: ${({ theme }) => theme.fonts.default};
    color: ${({ theme }) => theme.colors.greyish};
    font-weight: normal;
    margin-bottom: ${(props) => props.theme.spacing[2]}px;
`;

export const EnterpriseCountry = styled.span`
    font-size: ${({ theme }) => theme.fontSize[3]}px;
    font-family: ${({ theme }) => theme.fonts.default};
    color: ${({ theme }) => theme.colors.greyish};
    font-weight: normal;
`;
