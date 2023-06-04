import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import Layout from "./components/layout/Layout";
import AuthContext from "./components/store/authContext";
import LoginPage from "./components/routePages/LoginPage";
import Header from "./components/layout/Header";
import ProductList from "./components/product/ProductList";

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
      <Routes>
        <Route path="/" element={!authCtx.isLoggedIn ? <LoginPage /> : null} />
        <Route path="/header" element={authCtx.isLoggedIn ? <Header /> : null} />
        <Route path="/header" element={authCtx.isLoggedIn ? <ProductList /> : null} />
        <Route path="*" element={authCtx.isLoggedIn ? null : <Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
