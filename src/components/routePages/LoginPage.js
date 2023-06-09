import { useState, useRef, useContext, useEffect } from "react";
import AuthContext from "../store/authContext";
import { useNavigate } from "react-router-dom";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      navigate("/product");
    }
  }, [authCtx.isLoggedIn, navigate]);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBXAReDk4sL3syGNsnw4zA_qo9kMJpCA1Y";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBXAReDk4sL3syGNsnw4zA_qo9kMJpCA1Y";
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setIsLoading(false);
      if (response.ok) {
        if(isLogin){
          const data = await response.json();
          const modifiedEmail = enteredEmail.replace(/[@.]/g, "-");
          authCtx.login({
            token: data.idToken,
            userEmail: modifiedEmail,
          });
          navigate("/product");
        }else{
          setIsLogin(true)
        }
            } else {
        const errorData = await response.json();
        let errorMessage = "Authentication failed!";
        if (errorData && errorData.error && errorData.error.message) {
          errorMessage = errorData.error.message;
        }
        throw new Error(errorMessage);
      }
    } catch (err) {
      alert(err.message);
    }

  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            required
            ref={passwordInputRef}
          />
          <span
            className={classes.show}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button type="button" onClick={switchAuthModeHandler}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
