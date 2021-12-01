import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, TextField, Button } from "@mui/material";

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
  img: {
    width: "100px",
    height: "100px",
    borderRadius: "8px",
  },
}));

function ImageContainer({ imgSrc }) {
  const classes = useStyles();
  return (
    <div >
      <img className={classes.img} width="100px" height="100px" src={imgSrc} alt="" />
    </div>
  );
}

export default ImageContainer;
