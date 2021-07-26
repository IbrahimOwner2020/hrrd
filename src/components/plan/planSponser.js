import React from 'react';
import styled from 'styled-components';
import Plans from './plans/plans';
import Sponsers from './sponser/sponsers';

const Div = styled.div`
    background-color: #f3f3f3;
    margin: 100px 0;
    padding: 100px 0;
`;

const PlanSponser = () => (
    <Div>
        <Sponsers />
        <Plans />
    </Div>
);

export default PlanSponser;