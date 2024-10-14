import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
         <p>&copy; {new Date().getFullYear()} My E-Commerce Website</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #333;
  color: #fff;
  text-align: center;
`;

export default Footer;