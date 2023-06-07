import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProductList.module.css";

const DummyProducts = [
  {
    title: "Appearal-1",
    price: 70,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1lWtstdUm6cpnEdrMGwxK1PYCZJZT1_pCQ&usqp=CAU",
  },
  {
    title: "Appearal-2",
    price: 100,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4oQVqch-LP82W2h3Ej3cG0TPYAqaSojRKOA&usqp=CAU",
  },
  {
    title: "Appearal-3",
    price: 100,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQosMRgPNJACfYzGESNZrH242GDvyTiI8gSw&usqp=CAU ",
  },
  {
    title: "Appearal-4",
    price: 100,
    imageUrl:
      "https://static3.azafashions.com/tr:w-317/uploads/product/akara-m-54-0558285001595255461.jpg",
  },
  {
    title: "Appearal-5",
    price: 50,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatvDXDyJMcaiXzyr5D4bAzjyV1B7GlH8-Bw&usqp=CAU",
  },
  {
    title: "Appearal-6",
    price: 70,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwmUbq4XYrBPh2ZAYdkSakX1YJE-rGED_p3w&usqp=CAU",
  },
  {
    title: "Appearal-7",
    price: 100,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2SIFfWwqAYAkv19TKj9mU-g6qLJDs8kWew&usqp=CAU",
  },
  {
    title: "Appearal-8",
    price: 100,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCPBxOERlLTYJ6iu9XJtgAdisqNv2pvcfOg&usqp=CAU",
  },
  {
    title: "Appearal-9",
    price: 50,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgqAa5P-cG0AROJ9T8n68fbzw5wixtHndYZQ&usqp=CAU",
  },
  
];

const ProductList = ({ addToCart }) => {
  const list = DummyProducts.map((product, index) => (
    <div key={index} className={classes.productItem}>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <Link to={`/productDetails/${index}`}>
        <img
          src={product.imageUrl}
          alt="pro-photos"
          className={classes.productImage}
        />
      </Link>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  ));

  return <div className={classes.productGrid}>{list}</div>;
};

export default ProductList;
