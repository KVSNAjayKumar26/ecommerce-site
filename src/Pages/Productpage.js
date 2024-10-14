import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToCart } from '../redux/cartSlice';

const Productpage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => setProduct(response.data))
        .catch(error => console.error(error));
    }, [id]);

    if (!product) return <div>Loading...</div>
  return (
    <div>
        <img src={product.image} alt={product.title} />
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default Productpage;