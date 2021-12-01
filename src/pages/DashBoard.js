import React from "react";
import { makeStyles } from "@material-ui/core";
import SideMenu from "../components/SideMenu";
import "./Dashboard.css";

const useStyles = makeStyles((theme) => ({}));

function DashBoard() {
  const classes = useStyles();
  return (
    <div>
      <div className="row p-0">
        <div className="col-md-3 m-0 p-0">
          <SideMenu className="pt-5 mt-5" />
        </div>
        <div
          className="col-md-9 m-0 p-0"
          style={{ backgroundColor: "#F0F3F4" }}
        >
          <nav class="navbar navbar-expand-lg navbar-light bg-light py-2">
            <span class="navbar-brand" href="#">
              <h2>DashBoard</h2>
            </span>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#"></a>
                </li>
              </ul>
              <div class="form-inline my-2 my-lg-0 pr-5">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">
                      <i class="fas fa-search"></i>
                    </a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link" href="#">
                      <i class="fas fa-th"></i>
                    </a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link" href="#">
                      <span className="bell p-1 px-2">
                        <i class="fas fa-bell pr-1"></i>
                        15
                      </span>
                    </a>
                  </li>
                  <li class="nav-item active pl-5">
                    <a
                      class="nav-link"
                      style={{
                        border: "2px solid #2B83EA",
                        borderRadius: "50%",
                        width: "45px",
                        height: "45px",
                      }}
                      href="#"
                    >
                      <i class="far fa-user"></i>
                    </a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link" style={{ fontWeight: "700" }} href="#">
                      Groww90
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="col-md-12">
            <div className="dashboard-card">
              <div className="d-card">
                <h2 className="pt-5 pb-5">Welcome to Your DashBoard, Grow90</h2>
                <div className="d-card-me p-5 pb-5">
                  <h4 className="pb-3">
                    Your are just steps away from enabling live payments
                  </h4>
                  <h4 className="text-muted pb-5 pb-5">
                    Submit a few KYC details and start accepting payments from
                    your customers
                  </h4>
                  <div className="row">
                    <div className="col-md-4">
                      <h2 className="">Contact Details</h2>
                    </div>
                    <div className="col-md-4">
                      <h2 className="">Live Payments and Settlements</h2>
                      <p className="text-muted h5 pt-3">
                        Submit a few KYC details to start accepting <br />payments and
                        receive settlements in your <br />account
                      </p>
                      <button type="button" class="btn btn-primary px-3 py-3 mt-3">
                        Submit KYC
                      </button>
                    </div>
                    <div className="col-md-4">
                      <h2 className="">Account Activation</h2>
                      <p className="text-muted h5 pt-3">
                        Get all KYC details approve to <br /> complete the account activation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
