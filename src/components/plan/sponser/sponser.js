import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.12);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center
`;

const Sponser = ({data}) => (
    <Div style={{backgroundColor: data.background}}>
        <img src={data.logo} alt={data.title} />
    </Div>
);
export default Sponser;