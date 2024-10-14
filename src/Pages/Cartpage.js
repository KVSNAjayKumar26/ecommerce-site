// src/pages/CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { removeFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    if (cartItems.length === 0) {
        return <EmptyCart>Your cart is empty!</EmptyCart>;
    }

    return (
        <CartContainer>
            <CartTitle>Your Cart</CartTitle>
            <CartItemsContainer>
                {cartItems.map((item) => (
                    <CartItem key={item.id} className="cart-item">
                        <ImageWrapper>
                            <ItemImage src={item.image} alt={item.title} />
                        </ImageWrapper>
                        <ItemDetails>
                            <ItemTitle>{item.title}</ItemTitle>
                            <ItemPrice>${item.price}</ItemPrice>
                            <RemoveButton
                                onClick={() => handleRemoveFromCart(item.id)}
                                className="remove-btn"
                            >
                                Remove
                            </RemoveButton>
                        </ItemDetails>
                    </CartItem>
                ))}
            </CartItemsContainer>

            <CheckoutContainer>
                <Link to="/checkout">
                    <CheckoutButton>Proceed to Checkout</CheckoutButton>
                </Link>
            </CheckoutContainer>
        </CartContainer>
    );
};

// Styled Components

// Animation for item fade-in and remove
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const CartContainer = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f8f9fa;
  color: #333;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const CartTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CartItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  animation: ${fadeIn} 0.5s ease-in-out;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease;

  &:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease-in-out;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const ItemImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ItemDetails = styled.div`
  flex: 2;
`;

const ItemTitle = styled.h3`
  font-size: 1.5rem;
  color: #2c3e50;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ItemPrice = styled.p`
  font-size: 1.25rem;
  color: #e74c3c;
`;

const RemoveButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #c0392b;
  }

  &:active {
    animation: ${fadeOut} 0.5s ease-out forwards;
  }
`;

const EmptyCart = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: #7f8c8d;
  margin-top: 50px;
`;

const CheckoutContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const CheckoutButton = styled.button`
  background-color: #2ecc71;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #27ae60;
  }
`;

// Export the component
export default CartPage;
