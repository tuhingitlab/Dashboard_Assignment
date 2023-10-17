import React from "react";
import BarGraph from "./Bargraph";
import DonutChart from "./Piegraph";
import "bootstrap/dist/css/bootstrap.min.css";

import "../Chart/Chart.css";

const Chart = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            {/* <div className="Chart-Card"> */}
            {/* <div className="container"> */}
            {/* <div className="row"> */}
            {/* <div className="col-md-8"> */}
            <div className="Chart-Card">
              <div className="row-md-6">
                <h3>Overview</h3>
                <h6 className="">Monthly Earnings</h6>
              </div>
              <div className="row-md-6">
                <BarGraph />
                {/* {/* </div> */}
              </div>
            </div>
          </div>
          {/* </div> */}
          <div className="col-md-1">
            <p>&nbsp;</p>
          </div>
          <div className="col-md-4">
            <div className="Pie-Card">
              <div className="container">
                <div className="row">
                  <div className="row-md-6">
                    <h3>Customers</h3>
                    <span className="customer">
                      Customers that buy products
                    </span>
                  </div>
                  <div className="row-md-6">
                    <DonutChart />
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

export default Chart;
