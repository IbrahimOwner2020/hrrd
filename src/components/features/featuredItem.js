import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.12);
    border-radius: 10px;
    padding: 15px 18px;
    align-items: center;
    width: max-content;
`;

const Div2 = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 10px;

    img {
        width: 20px;
        height: 20px;
    };
`;

const Div3 = styled.div`
    
    h4 {
        font-family: inherit;
        font-weight: 500;
        font-size: 20px;
        margin-bottom: 5px;
        color: #092F47;   
    };

    p {
        font-weight: 400;
        font-family: inherit;
        font-size: 10px;
        line-height: 15px;
        max-width: 175px;
        color: rgba(9, 47, 71, 0.5);
    }
`;

const FeaturedItem = ({data}) => (
    <Div>
        <Div2 style={{backgroundColor: data.back}}>
            <img src={data.image} alt="featured icon" />
        </Div2>
        <Div3>
            <h4>{data.title}</h4>
            <p>{data.description}</p>
        </Div3>
    </Div>
);

export default FeaturedItem;