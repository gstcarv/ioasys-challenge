import React from 'react';
import { baseDomain } from '../../../../services';
import {
    Container,
    EnterpriseImage,
    EnterpriseInformation,
    EnterpriseTitle,
    EnterpriseType,
    EnterpriseCountry,
} from './styles';

import { useNavigate } from 'react-router-dom';

function EnterpriseCard({ enterpriseData: { photo, enterprise_type, country, enterprise_name, id } }) {
    const navigate = useNavigate();

    return (
        <Container onClick={() => navigate(`enterprise/${id}`)} data-testid='enterprise-card'>
            <EnterpriseImage src={baseDomain + photo} />

            <EnterpriseInformation>
                <EnterpriseTitle>{enterprise_name}</EnterpriseTitle>
                <EnterpriseType>{enterprise_type.enterprise_type_name}</EnterpriseType>
                <EnterpriseCountry>{country}</EnterpriseCountry>
            </EnterpriseInformation>
        </Container>
    );
}

export default EnterpriseCard;
