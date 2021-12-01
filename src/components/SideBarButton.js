import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./SideBar.css";

const useStyles = makeStyles((theme) => ({
  sideBar: {
    backgroundColor: "#23304C",
  },
  topTxt: {
    color: "#fff",
    fontSize: "80px !important",
    fontFamily: "Poppins",
    fontWeight: "700",
    padding: "5rem 1rem 6rem",
  },
  side3: {},
}));
function SideBarButton({ color, title }) {
  const classes = useStyles();
  return (
    <div>
      <div className="row side-elements align-items-center py-3">
        <div className="col-md-4 side-1">
          <h1 className="side-1-1"></h1>
        </div>
        <div className="col-md-8 side-2">
          <div className="row align-items-center">
            <div className="col-md-4">
              <i className="fas fa-boxes" style={{ color: `${color}` }}></i>
            </div>
            <div className="col-md-8">
              <h4 className={classes.side3} style={{ color: `${color}` }}>
                {title}
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-4 side-3"></div>
      </div>
    </div>
  );
}

export default SideBarButton;
