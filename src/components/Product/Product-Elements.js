import styled from "styled-components";

export const Buttons = styled.div`
  display: flex;
`;

export const ProductContainer = styled.div`
  border: 0px;
  border-radius: 0px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  padding: 20px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover{
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);  
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: auto;
    height: 130px;
  }
`;
export const ProductDesc = styled.div`
  height: 100px;
  h5 {
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    padding-top: 10px;
    span {
      font-weight: 400;
    }
  }
`;
export const ProductFooter = styled.div`
  border-top: 1px solid #e6e6e6;
  margin-top: 5px;
`;
export const Price = styled.div`
  h6 {
    font-weight: bold;
    font-size: 17px;
    padding-top: 10px;
  }
`;
