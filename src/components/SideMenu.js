import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./SideBar.css";
import SideBarButton from "./SideBarButton";

const useStyles = makeStyles((theme) => ({
  sideBar: {
    backgroundColor: "#23304C",
    height: "100vh"
  },
  topTxt: {
    color: "#fff",
    fontSize: "80px !important",
    fontFamily: "Poppins",
    fontWeight: "700",
    padding: "5rem 0rem 6rem 0rem",
  },
  side3: {},
}));

function DashBoard() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.sideBar}>
        <div>
          <h1 className={classes.topTxt}>SubSpace.</h1>
        </div>
        {/* <Link to=""> */}
        <SideBarButton title="Home" color="#53B9EA"/>
        <SideBarButton title="Home" color="#53B9EA"/>
        <SideBarButton title="Transaction" color="#F05050" />
        <SideBarButton title="Subscriptions plan" color="#DADADA" />
        <SideBarButton title="Settlements" color="#27C24B" />
        <SideBarButton title="Disputes" color="#F05050" />
        <SideBarButton title="Refunds" color="#FBE165" />
        <SideBarButton title="Customers" color="#27C24C" />
        <SideBarButton title="Offers" color="#F05050" />
        <SideBarButton title="My Accounts" color="#53B9EA" />
        <SideBarButton title="Setting" color="#FBE165" />
        {/* </Link> */}
      </div>
    </div>
  );
}

export default DashBoard;
