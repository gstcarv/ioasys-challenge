import styled from 'styled-components';

export const FieldContainer = styled.div`
    border-bottom: 1px solid
        ${(props) => (!props.hasError ? props.theme.colors.charcoalGrey[500] : props.theme.colors.neonRed)};
    width: 100%;
    padding: ${({ theme }) => theme.spacing[1]}px;
    display: flex;
`;

export const FieldInput = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize[3]}px;
    font-family: ${({ theme }) => theme.fonts.default};
    color: ${({ theme }) => theme.colors.charcoalGrey[400]};

    ::placeholder {
        color: ${({ theme }) => theme.colors.charcoalGrey[200]};
    }
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    width: 35px;
`;
