import React from "react";
import { makeStyles } from "@material-ui/core";
import SideMenu from "../components/SideMenu";

const useStyles = makeStyles((theme) => ({}));

function DashBoard() {
  const classes = useStyles();
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <SideMenu className="pt-5 mt-5" />
        </div>
        <div className="col-md-8">
          <div className="col-md-12">
            <div className="row align-items-center">
              <div className="col-md-8">Navbar</div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-4">A</div>
                  <div className="col-md-4">A</div>
                  <div className="col-md-4">A</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="dashboard-card">
              <div className="d-card">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
