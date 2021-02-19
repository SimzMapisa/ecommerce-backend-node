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

const Product = ({ product, onAddToCart  }) => {

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
        <button className="btn btn-success" onClick={()=>onAddToCart(product.id, 1)}>Add to Cart</button>
          <WishList />
        </Buttons>
      </ProductFooter>
    </ProductContainer>
  );
};

export default Product;
