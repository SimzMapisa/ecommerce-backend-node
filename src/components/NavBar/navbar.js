import React from "react";
import {
  NavContainer,
  Navbar,
  Bars,
  NavLink,
  CartContainer,
  Cart,
  CartBtn,
} from "./NavBarElements";
import Logo from "../../images/logo.svg";
import {useLocation} from "react-router-dom"

const NavBar = ({totalItems}) => {
  const location = useLocation();
  return (
    <NavContainer>
      <Navbar className="container">
        <NavLink to="/">
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h5>Pc Link</h5>
          </div>
        </NavLink>
        <Bars />
        <CartContainer>
          <NavLink to="/login" className="account">
            Login
          </NavLink>
          <NavLink to="/register" className="account">
            Register
          </NavLink>
          {location.pathname === '/' && (
            <NavLink to="/cart">
            <CartBtn>
              <Cart />
              <span className="badge badge-light">{totalItems}</span>
            </CartBtn>
            </NavLink>
          )}
        </CartContainer>
      </Navbar>
    </NavContainer>
  );
};

export default NavBar;
