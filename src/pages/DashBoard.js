import React from "react";
import { makeStyles } from "@material-ui/core";
import SideMenu from "../components/SideMenu";
import "./Dashboard.css";
import { Link } from "react-router-dom";

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
                  <Link class="nav-link" href="#"></Link>
                </li>
              </ul>
              <div class="form-inline my-2 my-lg-0 pr-5">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <Link class="nav-link" href="#">
                      <i class="fas fa-search"></i>
                    </Link>
                  </li>
                  <li class="nav-item active">
                    <Link class="nav-link" href="#">
                      <i class="fas fa-th"></i>
                    </Link>
                  </li>
                  <li class="nav-item active">
                    <Link class="nav-link" href="#">
                      <span className="bell p-1 px-2">
                        <i class="fas fa-bell pr-1"></i>
                        15
                      </span>
                    </Link>
                  </li>
                  <li class="nav-item active pl-5">
                    <Link
                      to=""
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
                    </Link>
                  </li>
                  <li class="nav-item active">
                    <Link
                      to="/"
                      class="nav-link"
                      style={{ fontWeight: "700" }}
                      href="#"
                    >
                      Groww90
                    </Link>
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
                      <div className="circle">
                        <i class="fas fa-check p-2"></i>
                      </div>
                      <h2 className="">Contact Details</h2>
                    </div>
                    <div className="col-md-4">
                      <div className="circle">
                        <i class="fas fa-check p-2"></i>
                      </div>
                      <h2 className="">Live Payments and Settlements</h2>
                      <p className="text-muted h5 pt-3">
                        Submit a few KYC details to start accepting <br />
                        payments and receive settlements in your <br />
                        account
                      </p>
                      <button
                        type="button"
                        class="btn btn-primary px-3 py-3 mt-3"
                      >
                        Submit KYC
                      </button>
                    </div>
                    <div className="col-md-4">
                      <div className="circle">
                        <i class="fas fa-check p-2"></i>
                      </div>
                      <h2 className="">Account Activation</h2>
                      <p className="text-muted h5 pt-3">
                        Get all KYC details approve to <br /> complete the
                        account activation
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-card-me p-3 mt-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                      <div className="card-2 p-1 pt-3">
                        <p>
                          <i class="fas fa-calendar-alt pr-2"></i>
                          Post 30 Days
                          <i class="fas fa-angle-down pl-2"></i>
                        </p>
                      </div>
                      <div className="card-2 p-1 pt-3">
                        <p>12 oct 2021 to 12 Nov 2021</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="card-3 p-1 pt-3 h5 pr-4">
                        Current Balance: <i class="fas fa-rupee-sign"></i> 2.2L
                      </div>
                      <div className="card- p-1 pt-3 h5 pl-4 pr-4">
                        <Link href="">View Settlement</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-4">
                    <div className="d-card-me card-me p-3 pt-4 pb-5 pl-4">
                      <h2 className="pb-2">Payment Value</h2>
                      <h3>
                        <i class="fas fa-rupee-sign"></i>6.72L
                      </h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-card-me card-me p-3 pt-4 pb-5 pl-4">
                      <h2 className="pb-2">Number of Payments</h2>
                      <h3>2.12K</h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-card-me card-me p-3 pt-4 pb-5 pl-4">
                      <h2 className="pb-2">Number of Refunds</h2>
                      <h3>44</h3>
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
