import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = (props) => {
  const tabHandler = (event) => {
    if (event.target.className === "card active") {
      return;
    }
    resetHandler();
    event.target.className = "card active";
  };

  const resetHandler = () => {
    let activeCards = document.getElementsByClassName("card active");
    if (activeCards.length > 0) {
      activeCards[0].className = "card inactive";
    }
  };

  return (
    <div>
      <h1>
        Welcome, my name is Carmen Shannon. <br />
        <br />
        Please explore the cards below.
      </h1>
      <div className="cardcontainer">
        <Link to="/about" className="card inactive" onClick={tabHandler}>
          About Page
        </Link>
        <Link to="/products" className="card inactive" onClick={tabHandler}>
          Products
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
