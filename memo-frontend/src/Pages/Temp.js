import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { TfiDashboard } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { FaFileInvoice } from "react-icons/fa6";
import { RiCustomerServiceFill } from "react-icons/ri";
import { LiaPeopleCarrySolid } from "react-icons/lia";

const Temp = () => {
  const [toggle, setToggle] = useState(false);
  const [loc, setLoc] = useState("");
  const location = useLocation();

  useEffect(() => {
    setLoc(location.pathname);
  }, [location.pathname]);

  return (
    <div className="main-container">
      <div className="main-part1">
        <div className="list-group">
          <button
            type="button"
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            <TfiDashboard /> DashBoard
          </button>

          <button
            type="button"
            className="list-group-item list-group-item-action"
            style={{ textDecoration: "none" }}
          >
            <CgProfile /> Profile
          </button>

          <button
            type="button"
            className="list-group-item list-group-item-action dropdown-toggle"
            onClick={() => setToggle(!toggle)}
          >
            <FaFileInvoice /> Invoice
          </button>

          {toggle && (
            <div>
              <Link to="createinvoice">
                <button
                  type="button"
                  className="list-group-item list-group-item-action"
                >
                  <LiaFileInvoiceSolid /> Create Invoice
                </button>
              </Link>
              <button
                type="button"
                className="list-group-item list-group-item-action"
              >
                <LiaFileInvoiceSolid /> View Invoice
              </button>
            </div>
          )}

          <button
            type="button"
            className="list-group-item list-group-item-action"
          >
            <RiCustomerServiceFill /> Customer
          </button>

          <button
            type="button"
            className="list-group-item list-group-item-action"
          >
            <LiaPeopleCarrySolid /> Vendors
          </button>
        </div>
      </div>
      <div className="main-part2">
        <div className="main-part2a">
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <span className="navbar-brand mb-0 h2">{loc}</span>
            </div>
          </nav>
        </div>
        <div className="main-part2b"></div>
      </div>
    </div>
  );
};

export default Temp;
