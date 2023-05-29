import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
};

export default App;
