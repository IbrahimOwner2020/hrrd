import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    margin: 50px 0;
`;

const Div2 = styled.div`
    max-width: 930px;
    margin: 0 auto;
    background-color: #00B2FF;
    border-radius: 20px;
    padding: 40px 0;

    @media (max-width: 962px) {
        margin: 0 16px;
    }
`;

const Div3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Div4 = styled.div`
    display: flex;
    justify-content: spaxce-between;
    padding: 7px;
    margin: 40px 0;
    background-color: #fff;
    border-radius: 5px;
`;

const H3 = styled.h3`
    color: #fff;
    font-family: inherit;
    font-size: 26px;
    font-weight: 600;

    @media (max-width: 450px) {
        font-size: 22px;
        text-align: center;
    }
`;

const Span = styled.span`
    color: #fff;
    font-family: inherit;
    font-weight: 400;
    font-size: 10px;
    margin-top: 12px;

    @media (max-width: 450px) {
        padding: 0 5px;
        text-align: center;
    }
`;

const Input = styled.input`
    width: 220px;
    height: 28px;
    padding: 0 10px;
    font-size: 12px;
    border: none;
    font-family: inherit;
    color: #092f47;

    :placeholder {
        color: rgba(9, 47, 71, 0.4);
    }

    :focus {
        outline: none;
    }

    @media (max-width: 450px) {
        width: 150px;
    }
`;

const Button = styled.button`
    border: none;
    border-radius: 4px;
    background-color: #FF7342;
    color: #fff;
    font-family: inherit;
    font-weight: 500;
    font-size: 13px;
`;

const Subscribe = () => {
    return(
        <Div>
            <Div2>
                <Div3>
                    <H3>Start Your 15 Days Free Trial!</H3>
                    <Span>Distinctively supply accurate methods of emprvovement before</Span>
                    <Div4>
                        <Input type="text" name="Email" id="Email" placeholder="Enter your Email"/>
                        <Button>Submit Now</Button>
                    </Div4>
                </Div3>
            </Div2>
        </Div>
    );
};

export default Subscribe;