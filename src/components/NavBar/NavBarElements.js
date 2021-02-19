import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";

export const NavContainer = styled.div`
  padding: 15px 0;
  background: #000;
  color: #fff;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavLink = styled(Link)`
  text-decoration: none !important;
`;
export const Bars = styled(FaBars)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const CartContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .account {
    font-size: 14px;
    padding-right: 15px;
    color: #e6e6e6;
    border-right: 1px solid #e6e6e6;
    margin: 10px;
  }
  span {
    position: absolute;
    z-index: 3;
    background: green;
    color: #fff;
    font-size: 14px;
    right: -10px;
    top: -5px;
    /* border: 2px solid #fff; */
    font-weight: 400;
  }
`;

export const Cart = styled(FaCartArrowDown)`
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`;

export const CartBtn = styled.div``;
