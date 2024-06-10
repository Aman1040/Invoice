import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { LiaFileInvoiceSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { TfiDashboard } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { FaFileInvoice } from "react-icons/fa6";
import { RiCustomerServiceFill } from "react-icons/ri";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import "./MainPage.css";

import { useAuth0 } from "@auth0/auth0-react";
const MainPage = () => {
  const { logout } = useAuth0();
  const [toggle, setToggle] = useState(false);
  const [loc, setLoc] = useState("");
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
    setLoc(location.pathname);
  }, [location.pathname]);

  return (
    <div className="main-body">
      {/* <div className="main-header font-regular navbar navbar-dark bg-primary text-white">
        <span
          style={{
            fontSize: "x-large",
            marginLeft: "20px",
            color: "text-secondary",
          }}
        >
          Radha Vilas
        </span>
        <div>
          <button
            class="btn btn-light"
            type="button"
            style={{ marginLeft: "160vh" }}
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logout
          </button>
        </div>
      </div> */}
      <div className="main-container">
        <div className="main-part1">
          <div class="list-group">
            <Link to="dashboard" style={{ textDecoration: "none" }}>
              <button
                type="button"
                class="list-group-item list-group-item-action main-button"
                aria-current="true"
              >
                <TfiDashboard /> DashBoard
              </button>
            </Link>
            <Link to="companyprofile" style={{ textDecoration: "none" }}>
              <button
                type="button"
                class="list-group-item list-group-item-action  main-button"
                style={{ textDecoration: "none", textDecorationLine: "none" }}
              >
                <CgProfile /> Profile
              </button>
            </Link>

            <button
              type="button"
              class="list-group-item list-group-item-action dropdown-toggle  main-button"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <FaFileInvoice /> Invoice
            </button>

            {toggle && (
              <div>
                <Link to="createinvoice" style={{ textDecoration: "none" }}>
                  <button
                    type="button"
                    class="list-group-item list-group-item-action  main-button"
                  >
                    <LiaFileInvoiceSolid /> Create Invoice
                  </button>
                </Link>

                <Link to="viewinvoice" style={{ textDecoration: "none" }}>
                  <button
                    type="button"
                    class="list-group-item list-group-item-action  main-button"
                  >
                    <LiaFileInvoiceSolid /> View Invoice
                  </button>
                </Link>
              </div>
            )}

            <Link to="customer" style={{ textDecoration: "none" }}>
              <button
                type="button"
                class="list-group-item list-group-item-action  main-button"
              >
                <RiCustomerServiceFill /> Customer
              </button>
            </Link>

            <Link to="vendors" style={{ textDecoration: "none" }}>
              <button
                type=" button"
                class="list-group-item list-group-item-action  main-button "
              >
                <LiaPeopleCarrySolid /> vendors
              </button>
            </Link>
          </div>
        </div>
        <div className="main-part2">
          <div className="main-part2a">
            <nav class="navbar navbar-light bg-light">
              <div class="container-fluid">
                <span class="navbar-brand mb-0 h2">{loc}</span>
              </div>
            </nav>
          </div>
          <div className="main-part2b">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
