import React from 'react';
import {ProductButton,ProductCard,ProductDesc,ProductImg,ProductInfo,ProductTitle,ProductWrapper,ProductsHeading,ProductsContainer} from './ProductsElements.js';

const Products = ({heading,data}) => {
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                    {data.map((product, index)=>{return(
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt}/>
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.price}</ProductDesc>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )})}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products
