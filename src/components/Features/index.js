import React from 'react'
import {FeatureContainer, FeatureButton} from './FeatureElements';
const Feature = ()  => {
    return (
       <FeatureContainer>
           <h1>Pizza Of The Day</h1>
           <p>Truffle alfredo sauce topped with 24 carrot</p>
        <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature;
