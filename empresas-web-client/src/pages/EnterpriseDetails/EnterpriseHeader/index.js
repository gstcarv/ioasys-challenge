import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../../components/Common';
import { Container, EnterpriseName } from './styles';

function EnterpriseHeader({ name }) {
    const navigate = useNavigate();

    return (
        <Container>
            <Icon.Back
                color='#fff'
                size={30}
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(-1)}
                data-testid='back-button'
            />

            {name ? (
                <EnterpriseName>{name}</EnterpriseName>
            ) : (
                <Skeleton height={20} width={200} style={{ marginLeft: 30 }} />
            )}
        </Container>
    );
}

export default EnterpriseHeader;
