import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <ProductList />
      </BrowserRouter>
    </div>
  );
};

export default App;
