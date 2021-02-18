import React from "react";
import Product from "../Product/Product";
import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";

// console.log(products);

const Products = ({products}) => {
    

  return (
    <>
        <Row className="">
          {products.map((product) => (
            <div key={product.id} className="col-xs-10 col-md-6  col-lg-3 mb-4">
              <Product product={product} />
            </div>
          ))}
        </Row>
    </>
  );
};

export default Products;
