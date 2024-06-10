import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Button } from "react-bootstrap";
// import "./ViewInvoice.css";

const ViewInvoice = () => {
  const [invoiceData, setInvoiceData] = useState([]);
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/invoice").then((res) => {
      setInvoiceData(res.data);
    });
    axios.get("http://localhost:8000/customers").then((res) => {
      setCustomerData(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/invoice/${id}`).then(() => {
      setInvoiceData(
        invoiceData.filter((invoice) => invoice.invoice_id !== id)
      );
    });
  };

  return (
    <div className="view-body">
      <div className="view-head">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">List of Invoices</span>
          </div>
        </nav>
      </div>
      <div className="view-table">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Invoice No</th>
              <th scope="col">Last update</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Contact</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.map((val, index) => {
              const customer = customerData.find(
                (cust) => cust.id === val.customer_id
              );
              const status = val.pending_amount > 0 ? "pending" : "no pending";
              return (
                <tr key={index} className="invoice-row">
                  <td scope="col">{index + 1}</td>
                  <td scope="col">{val.invoice_id}</td>
                  <td scope="col">{val.updated_at}</td>
                  <td scope="col">{val.invoice_amount}</td>
                  <td scope="col">{status}</td>
                  <td scope="col">{customer?.contact}</td>
                  <td scope="col">{customer?.client_name}</td>
                  <td scope="col">
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(val.invoice_id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewInvoice;
