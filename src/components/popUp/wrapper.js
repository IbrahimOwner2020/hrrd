import React from 'react';
import styled from 'styled-components';
import Backdrop from './backdrop';
import Aux from '../hoc/aux';


const Div = styled.div`
    max-width: 700px;
    height: 400px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    z-index: 200;

    @media (max-width: 800px) {
        top: 50%;
        left: -43%;
        transform: translate(0, 0);
        max-width: 100vw;
        height: 100vh;
    }
`;

const Wrapper = ( props ) => {
    return(
        <Aux>
            <Backdrop show={props.show} clicked={props.closed}/>
            <Div
                style={{
                    opacity: props.show ? '1' : '0',
                    transform: props.show ? 'translateY(-50%)' : 'translateY(-1000px)',
                    transition: 'all .3s'
                }}>{props.children}</Div>
        </Aux>
    );
};

export default Wrapper;