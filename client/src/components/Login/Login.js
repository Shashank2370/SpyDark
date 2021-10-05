import { Fragment, useEffect, useState } from "react";
import { TextField, Typography, Paper, Button } from "@material-ui/core";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

const Login = () => {
  const classes = useStyles();
  const location = useLocation();
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    setForm(initialState);
  }, [location]);

  const changeHandler = (event) => {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.prevantDefault();

    console.log(form);
  };

  const isLogin = location.pathname === "/login";

  return (
    <div data-aos="fade-up" data-aos-duration="2000" className={classes.root}>
      <Paper className={classes.paper} elevation={2}>
        <Typography className={classes.title}>
          {isLogin ? "Login" : "Signup"}
        </Typography>
        <form onSubmit={submitHandler}>
          <TextField
            className={classes.input}
            type="email"
            name="email"
            label="Email"
            value={form.email}
            onChange={changeHandler}
            fullWidth
          />
          <br />
          <TextField
            className={classes.input}
            type="password"
            name="password"
            label="Password"
            value={form.password}
            onChange={changeHandler}
            fullWidth
          />
          <br />
          {!isLogin && (
            <Fragment>
              <TextField
                className={classes.input}
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                value={form.confirmPassword}
                onChange={changeHandler}
                fullWidth
              />
              <br />
            </Fragment>
          )}
          <Button className={classes.button} type="submit">
            {isLogin ? "Login" : "Signup"}
          </Button>
          <Button
            className={classes.backButton}
            type="submit"
            to="/"
            component={Link}
          >
            Back
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
