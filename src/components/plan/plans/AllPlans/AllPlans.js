import React from 'react';
import styled from 'styled-components';
import Plan from './plan';

const month = [
    {
        title: "Free Plan",
        price: "0",
        time: "month",
        features: [
            "Access to editing 2 blocks",
            "Editing blocks together",
            "Access to 10 premium icons"
        ],
        center: false
    },
    {
        title: "Premium Plan",
        price: "19",
        time: "month",
        features: [
            "Access to editing all blocks",
            "Editing blocks together",
            "Access to all premium icons",
            "A dedicated domain",
            "10gb storage"
        ],
        center: true
    },
    {
        title: "Platnum Plan",
        price: "69",
        time: "month",
        features: [
            "Access to editing all blocks",
            "Editing blocks together",
            "Access to all icons",
            "A dedicated domain"
        ],
        center: false
    }
]

const year = [
    {
        title: "Premium Plan",
        price: "199",
        time: "year",
        features: [
            "Access to editing all blocks",
            "Editing blocks together",
            "Access to all premium icons",
            "A dedicated domain"
        ],
        center: false
    },
    {
        title: "Platnum Plan",
        price: "299",
        time: "year",
        features: [
            "Access to editing all blocks",
            "Editing blocks together",
            "Access to all premium icons",
            "A dedicated domain",
            "unlimited storage"
        ],
        center: true
    },
    {
        title: "Golden Plan",
        price: "499",
        time: "year",
        features: [
            "Access to editing all blocks",
            "Editing blocks together",
            "Access to all icons",
            "Unlimited domain",
            "Unlimited storage"
        ],
        center: false
    }
]

const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(235px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 20px;
    margin: 50px 16px;

    @media (max-width: 350px) {
        grid-template-columns: 1fr;
    }
`;


const AllPlans = ( props ) => {
    return(
        <div>
            <Div>
                {props.check ? 
                    year.map(data => (<Plan data={data} />)) : 
                    month.map(data => (<Plan data={data} />))
                }
            </Div>
        </div>
    );
};

export default AllPlans;