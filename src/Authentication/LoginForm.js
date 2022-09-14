import React, { useState, useContext } from "react";
import styles from "./Styles/LoginForm.module.css";
import { Button, TextField } from "@mui/material";

import { AppVillaContext } from "../contexts/theme";

import App from "../components/App";

const LoginForm = (props) => {

    const { isLogged, setIsLogged } = useContext(AppVillaContext);

    console.log(isLogged);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setenteredPassword] = useState("");
  const [message, setMessage] = useState("");

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setenteredPassword(event.target.value);
  };

  const loginSubmitHandler = (event) => {
    event.preventDefault();

    const filteredData = props.data.filter((singleData) => {
      return (
        singleData.email === enteredEmail &&
        singleData.password === enteredPassword
      );
    });

    {
      filteredData.length > 0 ? setIsLogged(true) : setMessage("Login Failed");
    }
  };

  return (
    <>
      {isLogged ? (
        <App />
      ) : (
          <form onSubmit={loginSubmitHandler}>
          <div className={styles.container}>
            <header className={styles.header}>
              <div className={styles.Login}>
                <TextField
                  onChange={emailHandler}
                  variant="standard"
                  placeholder="Username"
                  margin="normal"
                  required
                />
                <TextField
                  onChange={passwordHandler}
                  variant="standard"
                  placeholder="Password"
                  margin="normal"
                  required
                />

                <div className={styles.Button}>
                  <Button variant="contained" color="primary" type="submit">
                    Log In
                  </Button>
                </div>
              </div>
              <p className={styles.message}>{message}</p>
            </header>
          </div>
          </form>
      )}
    </>
  );
};

export default LoginForm;
