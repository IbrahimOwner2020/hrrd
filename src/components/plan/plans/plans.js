import React, { useState } from 'react';
import styled from 'styled-components';
import AllPlans from './AllPlans/AllPlans';
import './plans.css';

const Div = styled.div`
    max-width: 850px;
    margin: 50px auto;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
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

const Div2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Span = styled.span`
    font-weight: 400;
    font-family: inherit;
    font-size: 16px;
    line-height: 24px;
    color: #092F47;
`;

const Plans = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleIsChecked = () => {
        setIsChecked(!isChecked);
    }
    
    return(
        <Div>
            <H3>Affordable Pricing</H3>
            <Div2>
                <Span>Monthly</Span>
                <div>
                <label className="switch">
                    <input type="checkbox" id="anually" name="anually" checked={isChecked} onChange={handleIsChecked}/>
                    <span className="slider"></span>
                </label>
                </div>
                <Span>Anually</Span>
            </Div2>
            <AllPlans check={isChecked} />
        </Div>
    );
};

export default Plans;