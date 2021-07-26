import React from 'react';
import styled from 'styled-components';
import closeIcon from '../../images/close.png';

const Div = styled.div`
    background-color: #fff;
    box-sizing: border-box;
    height: 500px;
    width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 44px rgba(151, 151, 151, 0.22);
    border-radius: 15px;
    padding: 30px 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 800px) {
        top: 0;
        left: 0;
        transform: translate(0, 0);
        width: 100vw;
        height: 100vh;
        border-radius: 0;
    }
`;

const H2 = styled.h2`
    font-family: inherit;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 43px;
    color: #FF7342;
    align-self: center;
`;

const SignBtn = styled.button`
    align-self: center;
    border: none;
    background-color: #FF7342;
    border-radius: 4px;
    padding: 13px 80px;
    font-size: 15px;
    line-height: 22px;
    font-family: inherit;
    font-weight: 600;
    color: #FFFFFF;
`;

const Input = styled.input`
    border: 1px solid rgba(4, 3, 49, 0.2);
    border-radius: 2px;
    font-weight: 400;
    font-family: inherit;
    padding: 0 15px;
    height: 50px;
    font-size: 14px;
    color: rgba(4, 3, 49, 0.4);
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

const Div3 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-size: 13px;
        font-weight: 400;
        font-family: inherit;
        line-height: 19px;
        color: rgba(4, 3, 49, 0.4);
    }

    button {
        font-weight: 500;
        font-size: 14px;
        font-family: inherit;
        margin-left: 4px;
        color: #FF7342;
        background-color: transparent;
        border: none;
        text-decoration: underline;
        cursor: pointer;

        :focus {
            outline: none;
        }
    }
`;

const Hr = styled.hr`
    background: rgba(4, 3, 49, 0.1);
    height: 1px;
    width: 100%;
`;

const SignInPop = ( props ) => {
    return(
        <Div>
            <Button onClick={props.close}>
                <img src={closeIcon} alt="close icon" />
            </Button>
            <H2>Sign In</H2>
            <Input type="text" name="Email" id="email" placeholder="Enter Your Email" />
            <Input type="password" name="password" id="password" placeholder="Enter Your password" />
            <SignBtn>Sign In</SignBtn>
            <Hr />
            <Div3>
                <span>Don't have an account?</span>
                <button onClick={props.register}>Sign Up</button>
            </Div3>
        </Div>
    );
};

export default SignInPop;