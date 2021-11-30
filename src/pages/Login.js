import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, TextField, Button } from "@mui/material";
import "./Login.css";

const useStyles = makeStyles((theme) => ({
  navbar: {
    boxShadow: "none",
    padding: ".5rem 5rem 1rem 5rem  !important",
    position: "fixed",
    transition: "all .5s ease-in-out",
    [theme.breakpoints.down("md")]: {
      padding: "0 .5rem !important",
    },
    [theme.breakpoints.down("xs")]: {
      padding: " .25rem 0 0rem 0rem !important",
    },
  },
  containerLogin: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#E5E5E5",
    height: "100vh",
  },
  loginPage: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    justifyContent: "center",
  },
  topBtnTxt: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    p: {
      fontSize: "30px",
      color: "#fff",
    },
  },
  topTxt: {
    display: "flex",
    justifyContent: "flex-start",
    fontSize: "60px",
    color: "#fff",
  },
}));
function Login() {
  const classes = useStyles();
  return (
    <div className={classes.containerLogin}>
      <div className={classes.loginPage}>
        <div className={classes.topContent}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item xs={6} md={4} className={classes.topTxt}>
              <p className="txt">Subspace.</p>
            </Grid>
            <Grid item xs={6} md={8}>
              <div className={classes.topBtnTxt}>
                <p className="paraSongs">New to subspace? </p>
                <Button variant="contained" className="px-3 py-2 ml-3">
                  Sign Up
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="row">
          <div className="col-md-4 left-login">
            <div className="col text-center p-5">
              <h1>Log in to Dashboard</h1>
            </div>
            <form>
              <div className="row">
                <div className="col-md-8 offset-2 px-5 py-5 pb-1">
                  <TextField
                    fullWidth
                    id="standard-password-input"
                    label="Your Email"
                    type="email"
                    autoComplete="current-password"
                    variant="standard"
                  />
                </div>
                <div className="col-md-8 offset-2 px-5 py-4 pt-1">
                  <TextField
                    fullWidth
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                  />
                </div>
                <div className="col text-center p-5">
                  <Button variant="contained" className="px-5 py-3">
                    Login
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-8 right-login">
            <div className="col text-center pt-5 pb-1">
              <h1>Why Choose Subspace?</h1>
            </div>
            <div className="col text-center">
              <h3>2000+ businesses trust their payments with SubSpace</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
