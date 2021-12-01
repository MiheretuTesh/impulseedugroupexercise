import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./SideBar.css";
import SideBarButton from "./SideBarButton";

const useStyles = makeStyles((theme) => ({
  sideBar: {
    backgroundColor: "#23304C",
    height: "100vh",
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
        <SideBarButton title="Home" color="#53B9EA" icon="fas fa-th" />
        <SideBarButton
          title="Transaction"
          color="#F05050"
          icon="fas fa-arrows-alt-h"
        />
        <SideBarButton
          title="Subscriptions plan"
          color="#DADADA"
          icon="fab fa-telegram-plane"
        />
        <SideBarButton
          title="Settlements"
          color="#27C24B"
          icon="fas fa-check-double"
        />
        <SideBarButton
          title="Disputes"
          color="#F05050"
          icon="fas fa-exclamation-circle"
        />
        <SideBarButton title="Refunds" color="#FBE165" icon="fas fa-directions" />
        <SideBarButton
          title="Customers"
          color="#27C24C"
          icon="fas fa-user-friends"
        />
        <SideBarButton title="Offers" color="#F05050" icon="fas fa-percent" />
        <SideBarButton title="Reward Points" color="#F05050" icon="fas fa-archive" />
        <SideBarButton
          title="My Accounts"
          color="#53B9EA"
          icon="fas fa-user-circle"
        />
        <SideBarButton title="Setting" color="#FBE165" icon="fas fa-cog" />
        {/* </Link> */}
      </div>
    </div>
  );
}

export default DashBoard;
