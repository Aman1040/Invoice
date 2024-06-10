import React from "react";
import "./PrintInvoice.css";
import image1 from "../images/RV.jpg";

export const PrintInvoice = React.forwardRef((props, ref) => {
  const { rows, cname, cadd, name, add, total } = props;
  return (
    <div ref={ref}>
      <div className="invoice-wrapper" id="print-area">
        <div className="invoice">
          <div className="invoice-container">
            <div className="invoice-head">
              <div className="invoice-head-top">
                <div className="invoice-head-top-left text-start">
                  <img src={image1} alt="Company Logo" />
                </div>
                <div className="invoice-head-top-right text-end">
                  <h3>Invoice</h3>
                </div>
              </div>
              <div className="hr"></div>
              <div className="invoice-head-middle">
                <div className="invoice-head-middle-left text-start">
                  <p>
                    <span className="text-bold">Date</span>: 05/12/2020
                  </p>
                </div>
                <div className="invoice-head-middle-right text-end">
                  <p>
                    <span className="text-bold">Invoice No:</span>16789
                  </p>
                </div>
              </div>
              <div className="hr"></div>
              <div className="invoice-head-bottom">
                <div className="invoice-head-bottom-left">
                  <ul>
                    <li className="text-bold">Invoiced To:</li>
                    <li>{cname}</li>
                    <li>{cadd}</li>
                  </ul>
                </div>
                <div className="invoice-head-bottom-right">
                  <ul className="text-end">
                    <li className="text-bold">Pay To:</li>
                    <li>{name}</li>
                    <li>{add}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="overflow-view">
              <div className="invoice-body">
                <table>
                  <thead>
                    <tr>
                      <td className="text-bold">Service</td>
                      <td className="text-bold">Description</td>
                      <td className="text-bold">Rate</td>
                      <td className="text-bold">QTY</td>
                      <td className="text-bold">Amount</td>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, index) => (
                      <tr key={index}>
                        <td>{row.id}</td>
                        <td>{row.description}</td>
                        <td>{row.unit}</td>
                        <td>{row.price}</td>
                        <td>{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="invoice-body-bottom">
                  <div className="invoice-body-info-item">
                    <div className="info-item-td text-end text-bold">
                      Total:
                    </div>
                    <div className="info-item-td text-end">${total}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="invoice-foot text-center">
              <p>
                <span className="text-bold">NOTE:&nbsp;</span>This is computer
                generated receipt and does not require physical signature.
              </p>

              <div className="invoice-btns">
                <button type="button" className="invoice-btn">
                  <span>
                    <i className="fa-solid fa-print"></i>
                  </span>
                  <span>Print</span>
                </button>
                <button type="button" className="invoice-btn">
                  <span>
                    <i className="fa-solid fa-download"></i>
                  </span>
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PrintInvoice;
