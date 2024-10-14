// src/pages/CheckoutPage.js
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Checkoutpage = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    country: '',
    paymentMethod: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (API call for order placement)
    alert('Order placed successfully!');
  };

  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>
      <CheckoutForm onSubmit={handleSubmit}>
        <FormSection>
          <FormLabel>Name</FormLabel>
          <FormInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </FormSection>

        <FormSection>
          <FormLabel>Address</FormLabel>
          <FormInput
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="123 Main St"
            required
          />
        </FormSection>

        <FormSection>
          <FormLabel>City</FormLabel>
          <FormInput
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="New York"
            required
          />
        </FormSection>

        <FormSection>
          <FormLabel>Country</FormLabel>
          <FormInput
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="USA"
            required
          />
        </FormSection>

        <FormSection>
          <FormLabel>Payment Method</FormLabel>
          <FormSelect
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="credit">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cash">Cash</option>
          </FormSelect>
        </FormSection>

        <CheckoutButton type="submit">Place Order</CheckoutButton>
      </CheckoutForm>
    </CheckoutContainer>
  );
};

// Styled Components

// Fade-in animation for smooth transition
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

const CheckoutContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in-out;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const CheckoutTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormSection = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: #2c3e50;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: border 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #3498db;
    box-shadow: 0px 0px 8px rgba(52, 152, 219, 0.4);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: border 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #3498db;
    box-shadow: 0px 0px 8px rgba(52, 152, 219, 0.4);
  }
`;

const CheckoutButton = styled.button`
  background-color: #2ecc71;
  color: #fff;
  padding: 15px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #27ae60;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #2ecc71;
    transform: translateY(0px);
  }
`;

export default Checkoutpage;
