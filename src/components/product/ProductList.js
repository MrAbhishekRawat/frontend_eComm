import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./ProductList.module.css";
import CartContext from "../store/cartContext";

const DummyProducts = [
  { id: "1",
    title: "Appearal-1",
    price: 70,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1lWtstdUm6cpnEdrMGwxK1PYCZJZT1_pCQ&usqp=CAU",
  },
  { id: "2",
    title: "Appearal-2",
    price: 100,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4oQVqch-LP82W2h3Ej3cG0TPYAqaSojRKOA&usqp=CAU",
  },
  { id: "3",
    title: "Appearal-3",
    price: 100,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQosMRgPNJACfYzGESNZrH242GDvyTiI8gSw&usqp=CAU ",
  },
  { id: "4",
    title: "Appearal-4",
    price: 100,
    imageUrl:
      "https://static3.azafashions.com/tr:w-317/uploads/product/akara-m-54-0558285001595255461.jpg",
  },
  { id: "5",
    title: "Appearal-5",
    price: 50,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatvDXDyJMcaiXzyr5D4bAzjyV1B7GlH8-Bw&usqp=CAU",
  },
  { id: "6",
    title: "Appearal-6",
    price: 70,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwmUbq4XYrBPh2ZAYdkSakX1YJE-rGED_p3w&usqp=CAU",
  },
  { id: "7",
    title: "Appearal-7",
    price: 100,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2SIFfWwqAYAkv19TKj9mU-g6qLJDs8kWew&usqp=CAU",
  },
  { id: "8",
    title: "Appearal-8",
    price: 100,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCPBxOERlLTYJ6iu9XJtgAdisqNv2pvcfOg&usqp=CAU",
  },
  { id: "9",
    title: "Appearal-9",
    price: 50,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgqAa5P-cG0AROJ9T8n68fbzw5wixtHndYZQ&usqp=CAU",
  },
  
];

const ProductList = () => {
const cartCtx = useContext(CartContext);

const addToCartItemHandler = item => {
  cartCtx.addItem({
    id: item.id,
    title: item.title,
    price: item.price,
    imageUrl: item.imageUrl,
    cartAmount: 1
  })
}

  const list = DummyProducts.map((product) => (
    <div key={product.id} className={classes.productItem}>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <Link to={`/productDetails/${product.id}`}>
        <img
          src={product.imageUrl}
          alt="pro-photos"
          className={classes.productImage}
        />
      </Link>
      <button onClick={() => addToCartItemHandler(product) }>Add to Cart</button>
    </div>
  ));

  return <div className={classes.productGrid}>{list}</div>;
};

export default ProductList;
