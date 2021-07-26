import React from 'react';
import styled from 'styled-components';
import Dash from '../../images/dashBoard.svg';
import network from '../../images/network.svg';
import key from '../../images/key.svg';
import collaboration from '../../images/collaboration.svg';
import total from '../../images/total.svg';
import FeaturedItem from './featuredItem';

const data =[
    {
        image: `${Dash}`,
        back: '#0084FE',
        title: 'Dashboard',
        description: 'Assertively paralle task synergistic deliverables after high-quality'
    },
    {
        image: `${network}`,
        back: '#FC6A6A',
        title: 'Statistics',
        description: 'Assertively paralle task synergistic deliverables after high-quality'
    },
    {
        image: `${key}`,
        back: '#00B8F3',
        title: 'Easy Access',
        description: 'Assertively paralle task synergistic deliverables after high-quality'
    },
    {
        image: `${collaboration}`,
        back: '#FC6A6A',
        title: 'Collabotation',
        description: 'Assertively paralle task synergistic deliverables after high-quality'
    },
    {
        image: `${total}`,
        back: '#7CAA7C',
        title: 'Total Control',
        description: 'Assertively paralle task synergistic deliverables after high-quality'
    }
]

const Div = styled.div`
    max-width: 900px;
    margin: 80px auto;

    @media (max-width: 932px) {
        margin: 80px 16px;
    }
`;

const H3 = styled.h3`
    font-family: inherit;
    font-weight: 500;
    font-size: 30px;
    text-align: center;
    color: #092F47;
    line-height: 45px;
`;

const Div2 = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px;

    @media (max-width: 900px) {
        display: none;
        visibility: hidden;
    }
`;

const Div3 = styled.div`
    display: flex;
    justify-content: center;

    div {
        margin-right: 15px;
    }

    @media (max-width: 900px) {
        margin-top: 30px;
    }

    @media (max-width: 650px) {
        flex-direction: column;
        align-items: center;

        div {
            margin-top: 15px;
        }
    }
`;

const Features = () => {
    return(
        <Div>
            <H3>Features We<br/>provide for you</H3>
            <Div2>
                <FeaturedItem data={data[0]}/>
                <FeaturedItem data={data[1]}/>
                <FeaturedItem data={data[2]}/>
            </Div2>
            <Div3>
                <FeaturedItem data={data[3]}/>
                <FeaturedItem data={data[4]}/>
            </Div3>
        </Div>
    );
};

export default Features;