import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import {
  Grid,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from "@mui/material/FormHelperText";
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ImageContainer from "../components/ImageContainer";
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
    backgroundColor: "#E5E5E5 !important",
    height: "100vh",
    zIndex: "1000"
  },
  loginPage: {
    display: "flex",
    flexDirection: "column",
    width: "75%",
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
function Register() {
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
                <p className="paraSongs">Already has an account</p>
                <Button variant="contained" className="px-3 py-2 ml-3 ">
                  Login
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="row">
          <div className="col-md-4 left-login">
            <div className="col text-center p-5">
              <h1>Create an Account</h1>
            </div>
            <form>
              <div className="row">
                <div className="col-md-10 offset-1 px-5 py-4 pt-5">
                  <TextField
                    fullWidth
                    id="standard-password-input"
                    label="Enter Mobile"
                    type="email"
                    autoComplete="current-password"
                    variant="standard"
                    InputLabelProps={{ style: { fontSize: 20 } }}
                  />
                </div>
                <div className="col-md-10 offset-1 px-5 py-4 pt-1">
                  <TextField
                    fullWidth
                    id="standard-password-input"
                    label="Enter Email"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    InputLabelProps={{ style: { fontSize: 20 } }}
                  />
                </div>
                <div className="col-md-10 offset-1 px-5 py-4 pt-1">
                  <TextField
                    fullWidth
                    id="standard-password-input"
                    label="Enter Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    InputLabelProps={{ style: { fontSize: 20 } }}
                  />
                </div>
                <div className="col-md-10 offset-1 px-5 py-4 pt-1">
                  <TextField
                    fullWidth
                    id="standard-password-input"
                    label="Confirm Password"
                    type="confirmpassword"
                    autoComplete="current-password"
                    variant="standard"
                    InputLabelProps={{ style: { fontSize: 20 } }}
                  />
                </div>
                <div className="col-md-8 offset-2 px-0 py-4 pt-1">
                  <FormGroup className="text-left">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="I hearby confirm that I am above 18 years old."
                    />
                  </FormGroup>
                </div>
                <div className="col-md-6 offset-0 pl-5 ml-3">
                  <Button variant="contained" className="px-5 py-3">
                    Verify OTP
                  </Button>
                </div>
                <div className="col-md-10 offset-1 p pl-5 pt-2 text-left">
                  <p>
                    <span className="text-muted">
                      {" "}
                      By creating this account, you agreed to our privacy policy
                    </span>{" "}
                    <b>Contact Us</b>
                  </p>
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

            <div className="row text-center pt-3 mx-5">
              <div className="col-sm-3 pt-5">
                <ImageContainer
                  imgSrc="https://data.whicdn.com/images/345656338/original.png?t=1592837478"
                  className=""
                />
              </div>
              <div className="col-sm-3 pt-5">
                <ImageContainer
                  imgSrc="https://m.media-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light_on_dark.png"
                  className=""
                />
              </div>
              <div className="col-sm-3 pt-5">
                <ImageContainer
                  imgSrc="https://yt3.ggpht.com/Ym_5TAhe4-1DON2kALAJfVstTrddNxXcBYzstI51AeOeed-gaYXh0t2aZx1wqCecEJzJkoI1WA=s900-c-k-c0x00ffffff-no-rj"
                  className=""
                />
              </div>
              <div className="col-sm-3 pt-5">
                <ImageContainer
                  imgSrc="https://yt3.ggpht.com/ytc/AAUvwngR0c4Uzc3wkD6QY-3BxA9MsFreDGvqJl210BDTc1c=s900-c-k-c0x00ffffff-no-rj"
                  className=""
                />
              </div>
            </div>
            <div className="row text-center pt-3 mx-5">
              <div className="col-sm-3 pt-5">
                <ImageContainer
                  imgSrc="https://www.apkmirror.com/wp-content/uploads/2021/08/53/61157884817ca.png"
                  className=""
                />
              </div>
              <div className="col-sm-3 pt-5">
                <ImageContainer
                  imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO3w3TyIyE1m1yG6LJWEbsdK6IqQSUrE0gL1fKycdMZ-NqL-ajZKzzE88wr24--z1bTRE&usqp=CAU"
                  className=""
                />
              </div>
              <div className="col-sm-3 pt-5">
                <ImageContainer
                  imgSrc="https://play-lh.googleusercontent.com/jFi2iC10wQJ42gu-DO2CMeIcN3qcmNQHtY5EBT_wtp4jCIozS4n3Q9pA7ZloDUGHHw"
                  className=""
                />
              </div>
              <div className="col-sm-3 pt-5">
                <ImageContainer
                  imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Aha_OTT_Logo.svg/800px-Aha_OTT_Logo.svg.png"
                  className=""
                />
              </div>
            </div>
            <div className="row text-center pt-3 mx-5">
              <div className="col-sm-3 pt-5">
                <ImageContainer
                  imgSrc="https://data.whicdn.com/images/345656338/original.png?t=1592837478"
                  className=""
                />
              </div>
              <div className="col-sm-3 pt-5">
                <ImageContainer
                  imgSrc="https://yt3.ggpht.com/ytc/AKedOLSBuPhObTD0Y5MO6PoVhjpBg2iLVr98xm39ODC69CU=s900-c-k-c0x00ffffff-no-rj"
                  className=""
                />
              </div>
              <div className="col-sm-3 pt-5">
                <ImageContainer
                  imgSrc="https://data.whicdn.com/images/345656338/original.png?t=1592837478"
                  className=""
                />
              </div>
              <div className="col-sm-3 pt-5">
                <ImageContainer
                  imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxurMkTtxhl_AUWTnkFTaFSYdgmQu5Z51nSV5iT2iooP_eGX77mmxwssLlcr-h4oRNsuw&usqp=CAU"
                  className=""
                />
              </div>
            </div>
            <div className="col text-center pt-5 mt-5 h5">
              <p>
                <span className="text-muted">
                  {" "}
                  Need help? We are just a click away.
                </span>{" "}
                <b>Contact Us</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
