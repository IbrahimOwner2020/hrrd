import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 100;
`

const Backdrop = (props) => (
    props.show ? <Div onClick={props.clicked}></Div> : null
)

export default Backdrop;