import React from "react";
import { useParams } from 'react-router-dom';

const DummyProducts = [
  {
    title: 'Colors',
    price: 100,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Blue Color',
    price: 100,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = DummyProducts[parseInt(id)];

  return (
    <div>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
