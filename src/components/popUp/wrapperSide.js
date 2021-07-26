import React from 'react';
import styled from 'styled-components';
import Backdrop from './backdrop';
import Aux from '../hoc/aux';


const Div = styled.div`
    width: 70vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    color: #fff;
    z-index: 100;
`;

const WrapperSide = ( props ) => {
    return(
        <Aux>
            <Backdrop show={props.show} clicked={props.closed}/>
            <Div
                style={{
                    opacity: props.show ? '1' : '0',
                    transform: props.show ? 'translateX(0%)' : 'translateX(1000px)',
                    transition: 'all .3s'
                }}>{props.children}</Div>
        </Aux>
    );
};

export default WrapperSide;