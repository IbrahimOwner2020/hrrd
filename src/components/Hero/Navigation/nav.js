import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import logo from '../../../images/logo.svg';
import Wrapper from '../../popUp/wrapper';
import RegisterPop from '../../popUp/registerPop';
import SignInPop from '../../popUp/signIn';


const BtnRegister = styled.button`
    background-color: #FED290;
    border-radius: 5px;
    color: #092F47;
    font-weight: 500;
    font-family: inherit;
    font-size: 14px;
    border: none;
    padding: 8px 18px;
    transition: all .1s;
    margin-right: 30px;

    :hover {
        cursor: pointer;
        background-color: #FF7342;
        color: #fff;
    }
`;

const BtnSignIn = styled.button`
    background-color: #FF7342;
    border-radius: 5px;
    color: #fff;
    font-weight: 500;
    font-family: inherit;
    font-size: 14px;
    border: none;
    padding: 8px 18px;
    transition: all .1s;

    :hover {
        cursor: pointer;
        background-color: #FF7342;
        color: #fff;
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

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 800px) {
        display: none;
        visibility: hidden;
    }
`;

const Img = styled.img`
    width: 150px;
    height: auto;
`;

const Nav = () => {
    const [register, setRegister] = useState(false);
    const [signIn, setSignIn] = useState(false);

    const openRegisterForm = () => {
        setRegister(true)
    };

    const closeRegisterForm = () => {
        setRegister(false)
    };

    const openSignInForm = () => {
        setSignIn(true)
    };

    const closeSignInForm = () => {
        setSignIn(false)
    };

    const closeSignOpenRegi = () => {
        closeSignInForm();
        openRegisterForm();
    };

    const closeRegiOpenSign = () => {
        closeRegisterForm();
        openSignInForm();
    };

    return(
        <Div>
            <Wrapper show={register} closed={closeRegisterForm}>
                <RegisterPop sign={closeRegiOpenSign}/>
            </Wrapper> 
            <Wrapper show={signIn} closed={closeSignInForm}>
                <SignInPop register={closeSignOpenRegi}/>
            </Wrapper> 
            <StyledLink to="/">
                <Img src={logo} alt="company's logo" />
            </StyledLink>
            <div>
                <StyledLink to="/" activeStyle={{ color: "#F64100", fontWeight: "500" }}>Home</StyledLink>
                <StyledLink to="/features" activeStyle={{ color: "#F64100", fontWeight: "500" }}>Features</StyledLink>
                <StyledLink to="/pricing" activeStyle={{ color: "#F64100", fontWeight: "500" }}>Pricing</StyledLink>
                <StyledLink to="testimonial" activeStyle={{ color: "#F64100", fontWeight: "500" }}>Testimonial</StyledLink>
            </div>
            <div>
                <BtnRegister onClick={openRegisterForm}>Register</BtnRegister>
                <BtnSignIn onClick={openSignInForm}>Sign In</BtnSignIn>
            </div>
        </Div>
    );
};

export default Nav;