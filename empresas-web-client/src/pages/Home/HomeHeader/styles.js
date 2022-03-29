import styled from 'styled-components';
import { TextField } from '../../../components/Common';
import GradientHeader from '../../../components/GradientHeader';

export const Container = styled(GradientHeader)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20%;
`;

export const SearchField = styled(TextField)`
    border-bottom-color: ${(props) => props.theme.colors.white};

    input {
        color: ${(props) => props.theme.colors.white};

        ::placeholder {
            color: #991237;
        }
    }
`;
