import React from "react";
import Col from "react-bootstrap/Col";
import {
  ProductContainer,
  ImageContainer,
  Img,
  ProductDesc,
  ProductFooter,
  Price,
  Buttons
} from "./Product-Elements";

import AddToCartBtn from "../buttons/addToCartBtn"
import WishList from "../buttons/wishlist"

const Product = ({ product }) => {

    console.log(product);
  return (
    <ProductContainer className="card">
      <ImageContainer>
        <img src={product.media.source} alt="" />
      </ImageContainer>
      <ProductDesc>
        <h5>
          {product.name}<span dangerouslySetInnerHTML={{__html: product.description}} />
        </h5>
      </ProductDesc>
      <ProductFooter>
        <Price>
          <h6>{product.price.formatted_with_symbol}</h6>
        </Price>
        <Buttons>
          <AddToCartBtn />
          <WishList />
        </Buttons>
      </ProductFooter>
    </ProductContainer>
  );
};

export default Product;
