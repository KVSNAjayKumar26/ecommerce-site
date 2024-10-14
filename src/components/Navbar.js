import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.items);
  return (
    <Nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #3498db;
  color: #fff;

  a {
    color: #fff;
    font-size: 18px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Navbar