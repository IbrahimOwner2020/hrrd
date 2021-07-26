import React from 'react';
import Logo from '../../images/logo.svg';
import Google from '../../images/googleIcon.svg';
import Facebook from '../../images/facebookIcon.svg';
import Twitter from '../../images/twitterIcon.svg';
import Instagram from '../../images/instagramIcon.svg';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(GatsbyLink)`
    text-decoration: none;
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: rgba(9, 47, 71, 0.4);
`;

const Main = styled.div`
    max-width: 1200px;
    margin: 100px auto 50px auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 50px;

    @media (max-width: 1232px) {
        margin: 100px 16px 30px 16px;
    }

    @media (max-width: 990px) {
        display: flex;
        flex-direction: column;
    }
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ImgLogo = styled.img`
    height: 30px;
    width: auto;
`;

const Span = styled.span`
    margin: 20px 0;
    font-family: inherit;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    color: rgba(9, 47, 71, 0.5);
    max-width: 300px;
`;

const Div2 = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        padding: 10px;
        background-color: rgba(255, 115, 66, 0.3);
        margin-right: 10px;
    }
`;

const CopyRight = styled.span`
    margin-top: 30px;
    font-family: inherit;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    color: #092F47;
`;

const Div3 = styled.div`
    grid-column: 2 / -1;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    div {
        ul {
            list-style: none;
            padding: 0;
            margin: 0;

            li {
                margin: 4px 0;
            }
        }

        span {
            font-family: Poppins;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 19px;
            color: #092F47;
        }
    }

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const H3 = styled.h3`
    font-family: inherit;
    margin-bottom: 13px;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #092F47; 

    @media (max-width: 650px) {
        margin-top: 20px;
    }
`;

const Footer = () => {
    return(
        <Main>
            <Div>
                <ImgLogo src={Logo} alt="Company's logo" />
                <Span>Professionally scale cross functional human capital and extensive technology</Span>
                <Div2>
                    <img src={Google} alt="google" />
                    <img src={Facebook} alt="facebook" />
                    <img src={Twitter} alt="twitter" />
                    <img src={Instagram} alt="instagram" />
                </Div2>
                <CopyRight>Copyright&copy; 2021 Mzabayuni. All Rights Reserved</CopyRight>
            </Div>
            <Div3>
                <div>
                    <H3>Services</H3>
                    <ul>
                        <li><StyledLink to="#">Documentation</StyledLink></li>
                        <li><StyledLink to="#">Design</StyledLink></li>
                        <li><StyledLink to="#">Themes</StyledLink></li>
                        <li><StyledLink to="#">Illustration</StyledLink></li>
                    </ul>
                </div>
                <div>
                    <H3>Company</H3>
                    <ul>
                        <li><StyledLink to="#">About</StyledLink></li>
                        <li><StyledLink to="#">Terms</StyledLink></li>
                        <li><StyledLink to="#">Private Policy</StyledLink></li>
                        <li><StyledLink to="#">CArriers</StyledLink></li>
                    </ul>
                </div>
                <div>
                    <H3>Job Info</H3>
                    <ul>
                        <li><StyledLink to="#">Select</StyledLink></li>
                        <li><StyledLink to="#">Services</StyledLink></li>
                        <li><StyledLink to="#">Payment</StyledLink></li>
                    </ul>
                </div>
                <div>
                    <H3>Contacts</H3>
                    <ul>
                        <li><span>Call: <StyledLink href="tel:+255787118486"> (+255) 787 118 486</StyledLink></span></li>
                        <li><span>Email: <StyledLink href="mailto:Mzabayuni@gmail.com"> Mzabayuni@gmail.com</StyledLink></span></li>
                        <li><span>Adress: <StyledLink href="#"> Sakina, Arusha</StyledLink></span></li>
                    </ul>
                </div>
            </Div3>
        </Main>
    );
};

export default Footer;