import React, { useState } from 'react';
import styled from 'styled-components';
import closeIcon from '../../../images/close.png';
import Wrapper from '../../popUp/wrapper';
import RegisterPop from '../../popUp/registerPop';
import SignInPop from '../../popUp/signIn';
import { Link as GatsbyLink } from 'gatsby';

const Div = styled.div`
    background-color: #fff;
    width: 100%;
    height: 100%;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 30px;
`;

const Button = styled.button`
    position: absolute;
    top: 25px;
    right: 10px;
    background-color: transparent;
    border: none;

    :focus {
        outline: none;
    }

    img {
        width: 25px;
        height: 25px;
    }
`;

// The Side Navigation

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
    margin-bottom: 15px;

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
    margin-bottom: 8px;

    :hover {
        color: #F64100;
    }
`;

const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
`;

const SideBar = ( props ) => {
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
            <Button onClick={props.close}>
                <img src={closeIcon} alt="close icon" />
            </Button>

            <Wrapper show={register} closed={closeRegisterForm}>
                 <RegisterPop sign={closeRegiOpenSign} close={closeRegisterForm}/>
             </Wrapper> 
             <Wrapper show={signIn} closed={closeSignInForm}>
                 <SignInPop register={closeSignOpenRegi} close={closeSignInForm}/>
             </Wrapper> 
             <Div2>
                 <StyledLink to="/" activeStyle={{ color: "#F64100", fontWeight: "500" }}>Home</StyledLink>
                 <StyledLink to="/features" activeStyle={{ color: "#F64100", fontWeight: "500" }}>Features</StyledLink>
                 <StyledLink to="/pricing" activeStyle={{ color: "#F64100", fontWeight: "500" }}>Pricing</StyledLink>
                 <StyledLink to="testimonial" activeStyle={{ color: "#F64100", fontWeight: "500" }}>Testimonial</StyledLink>
             </Div2>
             <Div2>
                 <BtnRegister onClick={openRegisterForm}>Register</BtnRegister>
                 <BtnSignIn onClick={openSignInForm}>Sign In</BtnSignIn>
             </Div2>
        </Div>
    );
};

export default SideBar;