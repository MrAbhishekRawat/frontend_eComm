import React from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

const DummyProducts = [
  {
    title: "Colors",
    price: 100,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductList = () => {
  const list = DummyProducts.map((product) => (
    <div key={product.title}>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <img src={product.imageUrl} alt={'pro-photos'} />
    </div>
  ));

  return <div className="list">{list}</div>;
};

export default ProductList;