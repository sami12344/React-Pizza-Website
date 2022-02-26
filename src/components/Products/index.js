import React from 'react'

import {
  ProductsContainer,
  ProductsHeading,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from './ProductsElement'

const Products = ({heading, data}) => {
  return (
    <div>
      <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductWrapper>
          {data.map((product) => {
            const { id, img, alt, name, desc, price, button } = product
            return (
              <ProductCard key={id}>
                <ProductImg src={img} alt={alt}></ProductImg>
                <ProductInfo>
                  <ProductTitle>{name}</ProductTitle>
                  <ProductDesc>{desc}</ProductDesc>
                  <ProductPrice>{price}</ProductPrice>
                  <ProductButton>{button}</ProductButton>
                </ProductInfo>
              </ProductCard>
            )
          })}
        </ProductWrapper>
      </ProductsContainer>
    </div>
  )
}

export default Products
