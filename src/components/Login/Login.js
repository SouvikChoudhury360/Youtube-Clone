import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { auth } from "../../lib/firebase";
import "./styles.css";

const Login = () => {
    const [loading, setLoading] = useState(false);
    return (
        <div className="login background--white">
        <div className="login__content">
        {loading && <div className="login__loading" />}
          <div className="login__wrapper">
            <img
              className="login__logo"
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="Google"
            />

            <p className="login__title">Sign in</p>
            <p className="login__subtitle">Continue to Gmail</p>

            <form className="login__form">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className="login__input"
                type="email"
              />

              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                className="login__input"
                type="password"
              />
              <div className="login__infoText">
                Not your computer? Use guest mode to sign in privately?
                <a href="/learnmore">Learn More</a>
              </div>

              <div className="login__buttons">
                <Button
                  className="login__button"
                  color="primary"
                >
                  Create Account
                </Button>

                <Button
                  className="login__button"
                  color="primary"
                  variant="contained"
                >
                  Sign in
                </Button>
              </div>
            </form>
          </div>
        </div>
    </div>
    )
}

export default Login
