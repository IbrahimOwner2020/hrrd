import React from 'react';
import Check from '../../images/check.svg';
import rightPart from '../../images/collaboration.png';
import styled from 'styled-components';

const Main = styled.div`
    max-width: 1000px;
    margin: 100px auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-auto-rows: auto;

    @media (max-width: 1032px) {
        margin: 80px 16px;
    }

    @media (max-width: 450px) {
        grid-template-columns: 1fr;
    }
`;

const RightImg = styled.img`
    width: 100%;
    height: auto;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 320px;
`;

const H3 = styled.h3`
    font-family: inherit;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;
    color: #092F47;
    margin-bottom: 10px;
`;

const Span = styled.span`
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: rgba(9, 47, 71, 0.5);
`;

const Div2 = styled.div`
    margin: 20px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    grid-column-gap: 10px;
    grid-row-gap: 15px;
`;

const Span2 = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 13px;
        height: 13px;
        margin-right: 6px;
    }

    span {
        font-family: inherit;
        font-weight: 500;
        font-size: 13px;
        line-height: 19px;
        color: #092F47;
    }
`;

const Button = styled.button`
    cursor: pointer;
    border: none;
    color: #fff;
    font-family: inherit;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    padding: 10px 12px;
    background-color: #FF7342;
    border-radius: 5px;
`;

const Collaboration = () => {
    return(
        <Main>
            <Div>
                <H3>Collaborate with your team anytime, anywhere</H3>
                <Span>Continually administrate process-centric human capital raher than bleeding-edge methodologies, Distinctively supply accurate methods of emprovemengt before</Span>
                <Div2>
                    <Span2>
                        <img src={Check} alt="check icon" />
                        <span>Organize your data</span>
                    </Span2>
                    <Span2>
                        <img src={Check} alt="check icon" />
                        <span>Always is sync</span>
                    </Span2>
                    <Span2>
                        <img src={Check} alt="check icon" />
                        <span>Work with any team</span>
                    </Span2>
                    <Span2>
                        <img src={Check} alt="check icon" />
                        <span>Embedded analytics</span>
                    </Span2>
                </Div2>
                <Button>Get Started Today</Button>
            </Div>
            <div>
                <RightImg src={rightPart} alt="right image" />
            </div>
        </Main>
    );
};

export default Collaboration;