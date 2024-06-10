import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashBoardd.css";
import axios from "axios";
import { Link } from "react-router-dom";
const DashBoardd = () => {
  const [totalCustomer, setTotalCustomer] = useState(0);
  const [totalInvoice, setTotalInvoice] = useState(0);
  const [totalWorkdone, setTotalWorkdone] = useState(0);
  const [totalvendor, setTotalvendor] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:8000/customers")
      .then((res) => {
        console.log(res.data.length);
        setTotalCustomer(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:8000/invoice")
      .then((res) => {
        console.log(res.data);
        setTotalInvoice(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="dashboard-body">
      <div className="dashboard-card1">
        <div class="card text-bg-success mb-3" style={{ maxWidth: "18 rem" }}>
          <div class="card-body">
            <h5 class="card-title" style={{ width: "21vh" }}>
              {totalCustomer} Customers!
            </h5>
            <p class="card-text"></p>
          </div>
          <div class="card-header">
            <Link to="/customer" style={{ textDecoration: "none" }}>
              <button
                type="button"
                class="list-group-item list-group-item-action"
                style={{ color: "white" }}
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="dashboard-card1">
        <div class="card text-bg-primary mb-3" style={{ maxWidth: "18 rem" }}>
          <div class="card-body">
            <h5 class="card-title" style={{ width: "21vh" }}>
              {totalInvoice} Invoice!
            </h5>
            <p class="card-text"></p>
          </div>
          <div class="card-header">
            <Link to="/viewinvoice">
              <button
                type="button"
                class="list-group-item list-group-item-action"
                style={{ color: "white" }}
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="dashboard-card1">
        <div class="card text-bg-warning mb-3" style={{ maxWidth: "18 rem" }}>
          <div class="card-body">
            <h5 class="card-title" style={{ width: "21vh" }}>
              {totalWorkdone} WorkDone!
            </h5>
            <p class="card-text"></p>
          </div>
          <div class="card-header">View Details</div>
        </div>
      </div>

      <div className="dashboard-card1">
        <div class="card text-bg-danger mb-3" style={{ maxWidth: "18 rem" }}>
          <div class="card-body">
            <h5 class="card-title" style={{ width: "21vh" }}>
              {totalvendor} Vendor!
            </h5>
            <p class="card-text"></p>
          </div>
          <div class="card-header">
            <Link to="/vendors">
              <button
                type="button"
                class="list-group-item list-group-item-action"
                style={{ color: "white" }}
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardd;
