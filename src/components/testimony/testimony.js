import React from 'react';
import left from '../../images/left-arrow.svg';
import right from '../../images/right-arrow.svg';
import jerry from '../../images/mzabayuni.jpg';
import tana from '../../images/tana.jpg';
import sam from '../../images/avatar.png';
import student from '../../images/student.svg';
import circle from '../../images/blue-circle.svg';
import startQuote from '../../images/start-quote.svg';
import endQuote from '../../images/end-quote.svg';
import styled from 'styled-components';

const Div = styled.div`
    max-width: 950px;
    margin: 80px auto;

    @media (max-width: 982px) {
        margin: 80px 16px;
    }
`;

const Div2 = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 15px;

    @media (max-width: 450px) {
        grid-template-columns: 1fr;
    }
`;

const Div3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Div4 = styled.div`
    display: flex;
    align-items: center;
    margin: 15px 0;

    img {
        margin-right: 12px;
    }
`;

const Div5 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 360px) {
        overflow-x: hidden;
    }
`;

const BackBlue = styled.div`
    width: 261px;
    height: 261px;
    border-radius: 50%;
    background-color: #00B2FF;
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
    z-index: 30;
`;

const ImgPeople = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
`;

const Testi = styled.span`
    font-family: inherit;
    font-weight: 500;
    font-size: 20px;
    color: #092F47;
    margin-bottom: 10px;
    line-height: 30px;
`;

const Person = styled.span`
    font-family: inherit;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: rgba(9, 47, 71, 0.5);
`;

const ImgPerson = styled.img`
    z-index: 50;
    width: 100%;
    width: 100%;
    height: auto;
`;

const Circle1 = styled.img`
    z-index: 10;
    position: absolute;
    top: 50%;
    left: 45%;
    transform: translate(-50%, -50%);
`;

const Circle2 = styled.img`
    z-index: 10;
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
`;

const StartQuote = styled.img`
    position: absolute;
    top: -10px;
    right: 0;
`;

const EndQuote = styled.img`
    position: absolute;
    bottom: -10px;
    left: 0;
`;

const Testimony = () => (
    <Div>
        <Div2>
            <Div3>
                <Testi>“I’ve download Hrrd from my Google Play about 1 year ago. This make the prototype process so easy and faster. I feel this is the best app for Prototyping use.”</Testi>
                <Person>- Chapozo - Co founder of CocoPay</Person>
                <Div4>
                    <img src={left} alt="left arrow" />
                    <img src={right} alt="left arrow" />
                </Div4>
                <div>
                    <ImgPeople src={jerry} alt="Mzabayuni" />
                    <ImgPeople src={tana} alt="manager" />
                    <ImgPeople src={sam} alt="boss" />
                </div>
            </Div3>
            <Div5>
                <ImgPerson src={student} alt="student" />
                <Circle1 src={circle} alt="circle" />
                <Circle2 src={circle} alt="circle" />
                <StartQuote src={startQuote} alt="quotes" />
                <EndQuote src={endQuote} alt="quotes" />
                <BackBlue></BackBlue>
            </Div5>
        </Div2>
    </Div>
);

export default Testimony;