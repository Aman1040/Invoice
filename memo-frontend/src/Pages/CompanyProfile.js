import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CompanyProfile.css";
import axios from "axios";
const CompanyProfile = () => {
  const [companyData, setCompanyData] = useState([]);
  const [Update, setUpdate] = useState([]);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone1, setPhone1] = useState(0);
  const [phone2, setPhone2] = useState(0);
  const [landline, setLandline] = useState(0);
  const [website, setWebsite] = useState("");

  const fetchcompanydata = async () => {
    axios
      .get("http://localhost:8000/company")
      .then((res) => {
        console.log(res.data);
        setCompanyData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(companyData);
  };
  useEffect(() => {
    fetchcompanydata();
  }, []);

  const handlesubmit = async (e) => {
    e.preventDefault();
    const formdata = {
      name: name,
      address: address,
      phone1: phone1,
      phone2: phone2,
      landline: landline,
      email: email,
      website: website,
    };
    setUpdate(formdata);
    console.log(formdata);
    await axios.post("http://localhost:8000/company/update", formdata);
  };
  return (
    <div className="profile-body">
      <form class="row g-3">
        <div class="col-md-4">
          <label for="companyname" class="form-label">
            Company Name
          </label>
          <input
            type="text"
            class="form-control"
            id="companyname"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder={
              companyData.length > 0 ? companyData[0].company_name : <></>
            }
          />
        </div>

        <div class="col-8">
          <label for="address" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            placeholder={
              companyData.length > 0 ? companyData[0].address : <></>
            }
          />
        </div>
        <div class="col-md-4">
          <label for="contact" class="form-label">
            Mobile No
          </label>
          <input
            type="number"
            class="form-control"
            id="contact"
            onChange={(e) => {
              setPhone1(e.target.value);
            }}
            placeholder={
              companyData.length > 0 ? companyData[0].mobile_no : <></>
            }
          />
        </div>
        <div class="col-md-4">
          <label for="alternate-contact" class="form-label">
            Alternate Mobile No
          </label>
          <input
            type="number"
            class="form-control"
            id="alternate-contact"
            onChange={(e) => {
              setPhone2(e.target.value);
            }}
            placeholder={
              companyData.length > 0 ? (
                companyData[0].alternate_mobile_no
              ) : (
                <></>
              )
            }
          />
        </div>
        <div class="col-md-4">
          <label for="landline-contact" class="form-label">
            Landline Mobile No
          </label>
          <input
            type="number"
            class="form-control"
            id="landline-contact"
            onChange={(e) => {
              setLandline(e.target.value);
            }}
            placeholder={
              companyData.length > 0 ? companyData[0].landline : <></>
            }
          />
        </div>
        <div class="col-md-4">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder={companyData.length > 0 ? companyData[0].email : <></>}
          />
        </div>
        <div class="col-md-4">
          <label for="website" class="form-label">
            Website
          </label>
          <input
            type="text"
            class="form-control"
            id="website"
            onChange={(e) => {
              setWebsite(e.target.value);
            }}
            placeholder={
              companyData.length > 0 ? companyData[0].website : <></>
            }
          />
        </div>
        <div class="col-md-4"></div>
        <div className="profile-line"> </div>
        <div class="col-md-3">
          <label for="customerprefix" class="form-label">
            Customer Prefix
          </label>
          <input
            type="text"
            class="form-control"
            id="customerprefix"
            placeholder={
              companyData.length > 0 ? companyData[0].customer_prefix : <></>
            }
          />
        </div>
        <div class="col-md-3">
          <label for="invoiceprefix" class="form-label">
            Invoice Prefix
          </label>
          <input
            type="text"
            class="form-control"
            id="invoiceprefix"
            placeholder={
              companyData.length > 0 ? companyData[0].invoice_prefix : <></>
            }
          />
        </div>
        <div class="col-md-3">
          <label for="gstin" class="form-label">
            GSTIN No.
          </label>
          <input
            type="number"
            class="form-control"
            id="gstin"
            placeholder={companyData.length > 0 ? companyData[0].gstin : <></>}
          />
        </div>
        <div class="col-md-3">
          <label for="panno" class="form-label">
            PAN No
          </label>
          <input
            type="number"
            class="form-control"
            id="panno"
            placeholder={companyData.length > 0 ? companyData[0].panno : <></>}
          />
        </div>

        <div class="col-md-3">
          <label for="accountno" class="form-label">
            Bank Account number
          </label>
          <input
            type="number"
            class="form-control"
            id="accountno"
            placeholder={
              companyData.length > 0 ? companyData[0].bank_acc : <></>
            }
          />
        </div>
        <div class="col-md-3">
          <label for="ifsccode" class="form-label">
            Bank IFSC Code
          </label>
          <input
            type="text"
            class="form-control"
            id="ifsccode"
            placeholder={
              companyData.length > 0 ? companyData[0].bank_ifsc : <></>
            }
          />
        </div>
        <div class="col-md-3">
          <label for="bankname" class="form-label">
            bank Name
          </label>
          <input
            type="text"
            class="form-control"
            id="bankname"
            placeholder={
              companyData.length > 0 ? companyData[0].bank_name : <></>
            }
          />
        </div>
        <div class="col-md-3" style={{ textAlign: "center" }}>
          <button type="button" class="btn btn-success" onClick={handlesubmit}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyProfile;
