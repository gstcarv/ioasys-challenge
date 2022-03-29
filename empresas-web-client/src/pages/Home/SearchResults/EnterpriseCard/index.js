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

function EnterpriseCard({ enterpriseData: { photo, enterprise_type, country, enterprise_name } }) {
    return (
        <Container>
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
