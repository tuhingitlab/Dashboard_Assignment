import React from "react";
import "../Products/Products.css";
import prodicon from "../../assests/prodicon.png";

const Prodbar = () => {
  return (
    <div className="container">
      <div className="card-prod">
        <div className="navbar">
          <h6 className="header">Product Sell</h6>
          <div className="search-container">
            <input type="text" placeholder="🔍 Search..." />
          </div>
          <div className="dropdown">
            <button className="dropbtn">Last-30-days </button>
            <div className="dropdown-content" id="dropdown-options">
              <a href="#" id="last-30-days">
                {/* Last 30 Days */}
              </a>
              <a href="#" id="last-7-days">
                {/* Last 7 Days */}
              </a>
              <a href="#" id="today">
                {/* Today */}
              </a>
            </div>
          </div>

          <table className="product-table">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Product Name</th>
                <th>Stocks</th>
                <th>Price</th>
                <th>Total Sales</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&nbsp;</td>
                <td>
                  <img src={prodicon} className="img-fluid" alt="Product" />
                  Abstract 3D
                </td>
                <td>32 in stocks</td>
                <td>$45.99</td>
                <td>20</td>
                <td>&nbsp;</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Prodbar;
