import React from 'react';
import styled from 'styled-components';
import tick from '../../../../images/tick.svg';

const Div = styled.div`
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const SpanTitle = styled.span`
    font-family: inherit;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #092F47;
`;

const SpanMoney = styled.span`
    font-family: inherit;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #092F47;

    span {
        font-size: 11px;
        font-weight: 400;
    }
`;

const Hr = styled.hr`
    width: 100%;
    height: 1px;
    background: rgba(9, 47, 71, 0.2);
    transform: matrix(1, 0, 0, -1, 0, 0);
`;

const Ul = styled.ul`
    list-style: none;
    padding: 0;

    li {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        img {
            width: 15px;
            height: 15px;
        }

        span {
            font-size: 12px;
            line-height: 15px;
            font-family: inherit;
            font-weight: 400;
            margin-left: 7px;
            color: rgba(9, 47, 71, 0.6);
        }
    }
`;

const Button = styled.button`
    align-self: center;
    border: none;
    background-color: #FF7342;
    border-radius: 4px;
    padding: 11px 50px;
    font-size: 13px;
    line-height: 22px;
    font-family: inherit;
    font-weight: 600;
    color: #FFFFFF;
`;

const Plan = ({data}) => (
    <Div style={{
        backgroundColor: data.center ? '#fff' : 'rgba(255, 255, 255, .5)',
        boxShadow: data.center ? '0px 4px 20px rgba(0, 0, 0, 0.12)' : null}}>
        <SpanTitle>{data.title}</SpanTitle>
        <SpanMoney>{data.price} <span>/{data.time}</span></SpanMoney>
        <Hr />
        <Ul>
            {data.features.map(feature => (
                <li>
                    <img src={tick} alt="tick" />
                    <span>{feature}</span>
                </li>
            ))}
        </Ul>
        <Button>Try for Free</Button>
    </Div>
);

export default Plan;