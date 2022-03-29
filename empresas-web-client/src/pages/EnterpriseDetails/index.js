import React from 'react';
import EnterpriseHeader from './EnterpriseHeader';
import { DetailsContainer, EnterpriseDescription, EnterpriseImage } from './styles';
import { PageSpacedContainer } from '../../config/globalStyles';
import { Navigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { EnterpriseService } from '../../services/entreprise';
import { baseDomain } from '../../services';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useTheme } from 'styled-components';
import { darken } from 'polished';

function EnterpriseDetails() {
    const { id } = useParams();

    const { data } = useSWR(['enterprise', id], async () => (await EnterpriseService.getById(id)).data);

    if (!id) {
        return <Navigate to={'/'} />;
    }

    return (
        <div>
            <SkeletonTheme baseColor={darken(0.1, '#fff')} highlightColor={darken(0.2, '#fff')}>
                <EnterpriseHeader name={data?.enterprise?.enterprise_name} />

                <PageSpacedContainer>
                    <DetailsContainer>
                        {!data?.enterprise && (
                            <>
                                <Skeleton height={270} style={{ marginBottom: 30 }} />

                                <Skeleton count={20} />
                            </>
                        )}

                        {data?.enterprise && (
                            <>
                                <EnterpriseImage src={`${baseDomain}${data.enterprise.photo}`} />

                                <EnterpriseDescription>{data.enterprise.description}</EnterpriseDescription>
                            </>
                        )}
                    </DetailsContainer>
                </PageSpacedContainer>
            </SkeletonTheme>
        </div>
    );
}

export default EnterpriseDetails;
