import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    background: linear-gradient(180deg, #FFA47E 0%, rgba(196, 196, 196, 0) 103.74%);
    padding: 40px 0;

    @media (max-width: 800px) {
        padding: 20px 0;
    }
`;

const Div2 = styled.div`
    max-width: 1200px;
    height: auto;
    margin: 0 auto;

    @media (max-width: 1250px) {
        margin: 0 16px;
    }
`;

const Hero = ( props ) => {
    return(
        <Div>
            <Div2>
                {props.children}
            </Div2>
        </Div>
    );
};

export default Hero;