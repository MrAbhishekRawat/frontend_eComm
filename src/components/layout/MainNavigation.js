import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./MainNavigation.module.css"

import AuthContext from "../store/authContext";

const MainNavigation = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/");
  };

  return (
    <header className={classes.mainnav}>
      <Link to="/product" className={classes.heading}>
        <h2>KhArEeDo</h2>
      </Link>
      <nav className={classes.mainnav}>
        <ul>
          {!isLoggedIn && (
            <Link to="/" className= {classes.link}>
              Login
            </Link>
          )}
          {isLoggedIn && (
            <button onClick={logoutHandler}>Logout</button>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
