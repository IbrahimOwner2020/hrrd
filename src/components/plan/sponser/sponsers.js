import React from 'react';
import Sponser from './sponser';
import okta from '../../../images/okta.svg';
import hubspot from '../../../images/hubspot.svg';
import airbase from '../../../images/airbase.svg';
import atlassian from '../../../images/atlassian.svg'
import asana from '../../../images/asana.svg'
import livestorm from '../../../images/livestorm.svg'
import styled from 'styled-components';

const data = [
    {
        logo: `${hubspot}`,
        background: "#fff",
        title: "Hubspot"
    },
    {
        logo: `${okta}`,
        background: "#FF7342",
        title: "Okta"
    },
    {
        logo: `${airbase}`,
        background: "#FFF",
        title: "Airbase"
    },
    {
        logo: `${atlassian}`,
        background: "#FFF",
        title: "Atlassian"
    },
    {
        logo: `${asana}`,
        background: "#FFF",
        title: "Asana"
    },
    {
        logo: `${livestorm}`,
        background: "#FFF",
        title: "Livestorm"
    }
];

const Div = styled.div`
    max-width: 700px;
    margin: 50px auto;

    @media (max-width: 732px) {
        margin: 50px 16px;
    }
`;

const Div2 = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 70px;
    grid-gap: 10px;
`;

const H3 = styled.h3`
    font-family: inherit;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;
    text-align: center;
    margin-bottom: 30px;
    color: #092F47;
`;

const Sponsers = () => (
    <Div>
        <H3>Easy to Intregate<br/> Your Apps</H3>
        <Div2>
            {data.map(data => (
                <Sponser data={data} />
            ))}
        </Div2>
    </Div>
);

export default Sponsers;