import React from 'react';
import Cation from './cation';
import faqImage from '../../images/faqImage.png';
import styled from 'styled-components';

const data = [
    {
        name: "faq",
        title: "Real-time data",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iste totam nisi voluptatem, modi esse qui possimus corrupti", 
        id: 98
    },
    {
        name: "faq",
        title: "End-to-end encryption",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iste totam nisi voluptatem, modi esse qui possimus corrupti",
        id: 67
    },
    {
        name: "faq",
        title: "FDIC Insuared",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iste totam nisi voluptatem, modi esse qui possimus corrupti",
        id: 34
    },
    {
        name: "faq",
        title: "REST API enabled",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iste totam nisi voluptatem, modi esse qui possimus corrupti",
        id: 22
    }
];

const Main = styled.div`
    max-width: 1000px;
    margin: 100px auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 100px;

    @media (max-width: 1032px) {
        margin: 80px 16px;
    }

    @media (max-width: 450px) {
        grid-template-columns: 1fr;
    }
`;

const Img = styled.img`
    width: 100%;
    height: auto;
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

const H3 = styled.h3`
    font-family: inherit;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;
    color: #092F47;
    margin-bottom: 10px;
    max-width: 300px;
`;

const Div = styled.div`
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Faq = () => {
    return(
        <Main>
            <div>
                <Img src={faqImage} alt="left" />
            </div>
            <div>
                <H3>Everything you need in one place</H3>
                <Div>
                    {data.map(data => (
                        <Cation data={data}/>
                    ))}
                </Div>
                <Button>Try it for Free</Button>
            </div>
        </Main>
    );
};

export default Faq;