import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./CreateInvoice.css";
import { TiPointOfInterest } from "react-icons/ti";
import { Button } from "react-bootstrap";
import PrintInvoice from "./PrintInvoice";
import { useReactToPrint } from "react-to-print";

const CreateInvoice = () => {
  const [companyData, setCompanyData] = useState([]);
  const [customersData, setCustomersData] = useState([]);
  const [address, setAddress] = useState("");
  const [gstin, setGstin] = useState("");
  const [total, setTotal] = useState(0);
  const [rows, setRows] = useState([]);
  const [name, setName] = useState("");

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    const t = rows.reduce((acc, cur) => acc + cur.total, 0);
    setTotal(t);
  }, [rows]);

  function handleChange(event) {
    customersData.forEach((val) => {
      if (val.id == event.target.value) {
        setName(val.client_name);
        setAddress(val.address);
        setGstin(val.gstinno);
      }
    });
  }

  const addRow = () => {
    if (!address) {
      alert("Select the Customer!");
    } else if (rows.length !== 0 && !rows[rows.length - 1].description) {
      alert("Description required!");
    } else {
      setRows([
        ...rows,
        { id: rows.length + 1, description: "", unit: 0, price: 0, total: 0 },
      ]);
    }
  };

  const fetchCompanyData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/company");
      setCompanyData(res.data);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  const fetchCustomersData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/customers");
      setCustomersData(res.data);
    } catch (error) {
      console.error("Error fetching Customers data:", error);
    }
  };

  useEffect(() => {
    fetchCompanyData();
    fetchCustomersData();
  }, []);

  function handlePrice(event, id) {
    const newRows = rows.map((val) => {
      if (val.id == id) {
        const price = event.target.value;
        const total = parseFloat(price) * parseInt(val.unit || 0);
        return { ...val, price, total };
      }
      return val;
    });
    setRows(newRows);
  }

  function handleDescription(event, id) {
    const newRows = rows.map((val) => {
      if (val.id == id) {
        return { ...val, description: event.target.value };
      }
      return val;
    });
    setRows(newRows);
  }

  function handleUnit(event, id) {
    const newRows = rows.map((val) => {
      if (val.id == id) {
        const unit = event.target.value;
        const total = parseInt(unit) * parseFloat(val.price || 0);
        return { ...val, unit, total };
      }
      return val;
    });
    setRows(newRows);
  }

  return (
    <div className="create-body">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <TiPointOfInterest /> Create Invoice
          </span>
        </div>
      </nav>

      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">
            <b>
              Company Name:{" "}
              {companyData.length > 0 ? companyData[0].company_name : ""}
            </b>
          </span>
          <span className="navbar-brand">
            <b>
              GSTIN NO: {companyData.length > 0 ? companyData[0].gstin : ""}
            </b>
          </span>
        </div>
      </nav>

      <div className="row g-2">
        <div className="col-3">
          <label htmlFor="validationCustom04" className="form-label">
            Select Customers
          </label>
          <select
            className="form-select"
            id="validationCustom04"
            required
            onChange={handleChange}
          >
            <option selected disabled value="">
              Choose...
            </option>
            {customersData.map((val, index) => (
              <option key={index} value={val.id}>
                {val.client_name}
              </option>
            ))}
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
        <div className="col-6"></div>
        <div className="col-3" style={{ marginTop: "10px" }}>
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <br />
          <input type="date" id="date" />
        </div>
      </div>

      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">
            <b>Customers Address: {address}</b>
          </span>
          <span className="navbar-brand">
            <b>Customers GSTIN NO: {gstin}</b>
          </span>
        </div>
      </nav>

      <div className="create-table">
        <table className="table">
          <tbody>
            <tr>
              <th>#</th>
              <th>Description</th>
              <th>Unit</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
            {rows.map((row, index) => (
              <tr key={index}>
                <th scope="row">{row.id}</th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleDescription(e, row.id)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    onChange={(e) => handleUnit(e, row.id)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    onChange={(e) => handlePrice(e, row.id)}
                  />
                </td>
                <td>{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button variant="primary" onClick={addRow}>
          Add Field
        </Button>
        <Button variant="primary" onClick={handlePrint}>
          Print
        </Button>
        <h2>Total: {total}</h2>
      </div>
      <div style={{ display: "none" }}>
        <PrintInvoice
          ref={componentRef}
          name={companyData.length > 0 ? companyData[0].company_name : ""}
          gst={companyData.length > 0 ? companyData[0].gstin : ""}
          cname={name}
          add={address}
          cadd={address}
          cgst={gstin}
          total={total}
          rows={rows}
        />
      </div>
      {/* {rows.map((row, index) => (
        <tbody>
          <tr key={index}>
            <td>{row.id}</td>
            <td>{row.description}</td>
            <td>{row.unit}</td>
            <td>{row.price}</td>
            <td>{row.total}</td>
          </tr>
        </tbody>
      ))} */}
    </div>
  );
};

export default CreateInvoice;
