import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthContext from '../store/authContext';

const MainNavigation = () => {
  const navigate= useNavigate()
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler=()=>{
    authCtx.logout();
    navigate("/")
  }

  return (
    <header >
      <Link to='/'>
        <div>Khareedo</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to='/'>Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;