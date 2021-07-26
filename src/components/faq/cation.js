import React, { useState } from 'react';
import styled from 'styled-components';
import Arrow from '../../images/arrowRight.svg';

const Input = styled.input`
    display: none;
    visibility: hidden:
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 10px 0;
    background-color: rgba(255, 164, 126, 0.25);
`;

const Point = styled.div`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #ff7342;
    margin-right: 10px;
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    background-color: rgba(255, 164, 126, 0.25);
    padding: 10px 14px 10px 10px;
`;

const H4 = styled.h4`
    font-family: inherit;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #092F47;
    margin-right: auto;
`;

const Span = styled.span`
    padding: 20px;
    font-family: inherit;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #092F47;
    transition: all .2s;
`;

const Cation = ({data}) => {
    const [check, setCheck] = useState(false);

    const handleCheckInput = () => {
        setCheck(!check);
    }

    return(
        <Div>
            <Label>
                <Input type="checkbox" name={data.name} checked={check} onChange={handleCheckInput} />
                <Point></Point>
                <H4>{data.title}</H4>
                <img src={Arrow} alt="Arrow" style={{transform: check ? 'rotate(90deg)' : 'rotate(0deg)'}}/>
            </Label>
            <Span style={{opacity: check ? '1' : '0', display: check ? 'inline-block' : 'none', transform: check ? 'translateY(0px)' : 'translateY(-100)', translate: 'all .2s'}}>{data.answer}</Span>
        </Div>
    );
};

export default Cation;