import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import Layout from "./components/layout/Layout";
import AuthContext from "./components/store/authContext";
import LoginPage from "./components/routePages/LoginPage";
import Header from "./components/layout/Header";
import About from "./components/routePages/About";
import Home from "./components/routePages/Home"
import CartIcon from "./components/cart/CartIcon";
import ContactPage from "./components/routePages/ContactPage"
import ProductDetail from "./components/product/ProductDetails";

function App() {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [authCtx.isLoggedIn, navigate]);

  return (
    <Layout>
    <Header/>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/productDetails" element={<ProductDetail/>}/>
        {authCtx.isLoggedIn && <Route path="/product" element={<CartIcon/>} />}
        <Route path="*" element={authCtx.isLoggedIn ? null : <Navigate to="/" replace />} />
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
