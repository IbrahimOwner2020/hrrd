import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import logo from '../../../images/logo.svg';
import SideBar from './sideBar';
import WrapperSide from '../../popUp/wrapperSide';

const Div = styled.div`
    display: none;
    visibility: hidden;
    position: relative;

    @media (max-width: 800px) {
        display: block;
        visibility: visible;
    }
`;

const StyledLink = styled(GatsbyLink)`
    color: #092F47;
    margin-right: 23px;
    font-size: 16px;
    font-family: inherit;
    font-weight: 400;
    transition: all .1s;

    :hover {
        color: #F64100;
    }
`;

const Img = styled.img`
    width: 150px;
    height: auto;
`;

const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 0;

    :focus {
        outline: none;
    }
`;

const Bar = styled.div`
    width: 30px;
    height: 4px;
    border-radius: 10px;
    background-color: #092F47;
    margin: 4px 0;
`;

const ResponsiveNav = () => {
    const [sideNav, setSideNav] = useState(false);

    const openSideNav = () => {
        setSideNav(true)
    };

    const closeSideNav = () => {
        setSideNav(false)
    };

    return(
        <Div>
            <WrapperSide show={sideNav} closed={closeSideNav}>
                <SideBar close={closeSideNav}/>
            </WrapperSide>
            <StyledLink to="/">
                <Img src={logo} alt="company's logo" />
            </StyledLink>
            <Button onClick={openSideNav}>
                <Bar></Bar>
                <Bar></Bar>
                <Bar></Bar>
            </Button>
        </Div>
    );
};

export default ResponsiveNav;