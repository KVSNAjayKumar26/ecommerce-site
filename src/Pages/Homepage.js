import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Homepage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(response => setProducts(response.data))
        .catch(error => console.error(error));
    }, []);
  return (
    <Container>
        <h1>Featured Products</h1>
        <ProductGrid>
            {products.map(product => (
                <ProductCard key={product.id}>
                    <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                    </Link>
                </ProductCard>
            ))}
        </ProductGrid>
    </Container>
  );
};

const Container = styled.div`
padding: 20px;
text-align: center;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  background: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  text-align: center;
  transition: transform 0.2s ease-in-out;

  img {
    max-width: 100%;
    height: 150px;
    object-fit: contain;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export default Homepage;