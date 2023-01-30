import React from "react";
import "./Dashboard.css";


function Dashboard() {
  return (
    <div>
      <div className="nav">
        <ul>
          <li>
            <a href="#" className="nav-link" id="home">
           <i><img src="/average-position.png" alt="" /></i> Kathiravan Tax
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              {" "}
              Dashboard
            </a>
          </li>
        </ul>
      </div>

      <section>
        <ul>
          <li>Category manager</li>
          <li>Inventory</li>
          <li>Orders</li>
          <li>Catalog Uploads</li>
          <li>Payment</li>
          <li>Promotion</li>
        </ul>


      </section>

      <span className="main">
        <h1>Welcome to Gokulam store</h1>
        <p>By entering below details you can create new Business</p>
      </span>
    </div>
  );
}

export default Dashboard;
