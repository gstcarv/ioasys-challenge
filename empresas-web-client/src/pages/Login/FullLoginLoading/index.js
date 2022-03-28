import React, { useState } from 'react';
import { LoadingContainer } from './styles';
import Spinner from 'react-spinner-material';
import { useTheme } from 'styled-components';

function FullLoginLoading({ show }) {
    const theme = useTheme();

    if (!show) return null;

    return (
        <LoadingContainer>
            <Spinner radius={90} color={theme.colors.greenyBlue} stroke={5} visible={true} />
        </LoadingContainer>
    );
}

export default FullLoginLoading;
