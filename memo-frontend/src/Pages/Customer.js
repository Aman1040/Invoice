import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./Customer.css";
const Customer = () => {
  const [formdata, setFormdata] = useState([]);
  const [searchData, setSearchData] = useState([]);

  function handleChange(value) {
    if (value == "") {
      setSearchData(formdata);
    } else {
      const filterdata = formdata.filter((val) => {
        return val.client_name.toLowerCase().includes(value.toLowerCase());
      });
      console.log(filterdata);
      setSearchData(filterdata);
    }
  }

  useEffect(() => {
    console.log("running axios...");
    axios
      .get("http://localhost:8000/customers")
      .then((res) => {
        console.log(res.data);
        setFormdata(res.data);
        setSearchData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("axios alsso running...");
  }, []);
  console.log(formdata);
  return (
    <div className="cust-body">
      <div className="cust-container">
        <div className="cust-head">
          <span> List of Register Customer</span>
        </div>
        <div className="cust-search">
          <form class="form-block">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ marginBottom: "20px" }}
              onChange={(e) => {
                handleChange(e.target.value);
              }}
            />
          </form>
        </div>
        <div className="cust-table">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Client NO</th>
                <th scope="col">Client Name</th>
                <th scope="col">Mobile No</th>
                <th scope="col">Gmail</th>
                <th scope="col">GSTIN No</th>
                <th scope="col">action</th>
              </tr>
            </thead>
          </table>

          {searchData.map((val, index) => {
            return (
              <table className="table">
                <tbody>
                  <tr id={index}>
                    <td>{index + 1}</td>
                    <td>{val.client_no}</td>
                    <td>{val.client_name}</td>
                    <td>{val.contact}</td>
                    <td>{val.email}</td>
                    <td>{val.gstinno}</td>
                    <td>
                      <div className="cust-btn">
                        <button type="button" class="btn btn-danger">
                          Delete
                        </button>
                        <button type="button" class="btn btn-primary">
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Customer;
