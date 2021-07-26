import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import flexport from '../../../images/flexport.jpg';
import livestorm from '../../../images/livestorm.jpg';
import asana from '../../../images/asana.jpg';
import hubsport from '../../../images/hubspot.jpg';
import statistics from '../../../images/Statistics.svg';

const Div = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
`;

const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 150px;
    width: 50%;

    @media (max-width: 650px) {
        width: 100%;
        margin-top: 100px;
        align-items: center;
    }
`;

const Div4 = styled.div`
    width: 50%;
    padding-top: 50px;

    @media (max-width: 650px) {
        display: none;
        visibility: hidden;
    }
`;

const Div3 = styled.div`
    display: flex;
    align-items: center;
    margin-top: 40px;

    img {
        height: 32px;
        width: auto;
        margin-right: 20px;

        :last-of-type {
            margin-right: 0;
        }

        @media (max-width: 650px) {
            height: 20px;
        }

        @media (max-width: 450px) {
            height: 15px;
        }
    }
`;

const H2 = styled.h2`
    color: #092F47;
    max-width: 280px;
    line-height: 54px;
    font-weight: 600;
    font-size: 40px;
    font-family: inherit;
    margin-bottom: 20px;

    @media (max-width: 650px) {
        max-width: 350px;
        text-align: center;
    }
`;

const StyledLink = styled(GatsbyLink)`
    text-decoration: none;
    color: #fff;
    font-size: 15px;
    font-family: inherit;
    font-weight: 400;
    background-color: #FF7342;
    padding: 10px 14px;
    border-radius: 5px;
    transition: all .2s;

    :hover {
        background-color: #092F47;
    }
`;

const Img = styled.img`
    width: 100%;
    height: auto;
`;

const HeroTypo = () => (
    <Div>
        <Div2>
            <H2>Best Platform for Monitor Work Flow</H2>
            <StyledLink to="/">Get 15 Days Trial</StyledLink>
            <Div3>
                <img src={flexport} alt="flexport" />
                <img src={livestorm} alt="flexport" />
                <img src={asana} alt="flexport" />
                <img src={hubsport} alt="flexport" />
            </Div3>
        </Div2>
        <Div4>
            <Img src={statistics} alt="flexport" />
        </Div4>
    </Div>
);

export default HeroTypo;