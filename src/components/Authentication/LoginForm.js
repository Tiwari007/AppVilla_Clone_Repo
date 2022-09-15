import React, { useState, useContext } from "react";
import styles from "./Styles/LoginForm.module.css";
import { Button, TextField } from "@mui/material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

import { AppVillaContext } from "../../contexts/theme";

import App from "../../components/App";

const LoginForm = ({ data }) => {
  const { isLogged, setIsLogged } = useContext(AppVillaContext);

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

    data.find(
      (singleData) =>
        singleData.email === enteredEmail &&
        singleData.password === enteredPassword
    )
      ? setIsLogged(true)
      : setMessage("Login Failed");
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
              <AssignmentIndIcon className={styles.user}/>
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
