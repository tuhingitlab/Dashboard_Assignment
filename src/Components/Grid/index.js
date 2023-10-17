import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "../../assests/icon.png";
import iconx from "../../assests/Iconx.png";
import icony from "../../assests/icony.png";
import iconz from "../../assests/iconz.png";
import "../Grid/Grid.css";
const Grid = () => {
  return (
    <>
      <div className="container">
        <div className="grid">
          <div className="row">
            <div className="col-12 col-md-3">
              <div className="card-1">
                <div className="card-header">
                  <div className="row">
                    <div className="col-5">
                      <img src={icon} alt="icon1" width="80px" height="80px" />
                    </div>
                    <div className="col-7">
                      <span>Earning</span>
                      <h6>$198K</h6>
                      <p className="change">37.8% this month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="card-2">
                <div className="card-header">
                  <div className="row">
                    <div className="col-5">
                      <img src={iconx} alt="icon1" width="80px" height="80px" />
                    </div>
                    <div className="col-7">
                      <span>Earning</span>
                      <h6>$198K</h6>
                      <p className="change">2% this month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="card-3">
                <div className="card-header">
                  <div className="row">
                    <div className="col-5">
                      <img src={icony} alt="icon1" width="80px" height="80px" />
                    </div>
                    <div className="col-7">
                      <span>Earning</span>
                      <h6>$198K</h6>
                      <p className="change">2% this month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="card-4">
                <div className="card-header">
                  <div className="row">
                    <div className="col-5">
                      <img src={iconz} alt="icon1" width="80px" height="80px" />
                    </div>
                    <div className="col-7">
                      <span>Earning</span>
                      <h6>$198K</h6>
                      <p className="change">11% this week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Grid;
