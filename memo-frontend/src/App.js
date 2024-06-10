import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import DashBoardd from "./Pages/DashBoardd";
import ViewInvoice from "./Pages/ViewInvoice";
import Customer from "./Pages/Customer";
import Vendor from "./Pages/Vendor";
import CompanyProfile from "./Pages/CompanyProfile";
import CreateInvoice from "./Pages/CreateInvoice";

import { useAuth0 } from "@auth0/auth0-react";
import Temp from "./Pages/Temp";

function App() {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <div className="main-header font-regular navbar navbar-dark bg-primary text-white">
            <span>Hello {user.name}</span>
            <div>
              <button
                class="btn btn-light"
                type="button"
                style={{ marginLeft: "10vh" }}
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout
              </button>
            </div>
          </div>

          <Routes>
            <Route path="/" element={<MainPage />}>
              <Route index path="dashboard" element={<DashBoardd />} />
              <Route path="createinvoice" element={<CreateInvoice />} />
              <Route path="viewinvoice" element={<ViewInvoice />} />
              <Route path="customer" element={<Customer />} />
              <Route path="vendors" element={<Vendor />} />
              <Route path="companyprofile" element={<CompanyProfile />} />
            </Route>
          </Routes>
        </div>
      ) : (
        <div>
          <div className="main-header font-regular navbar navbar-dark bg-primary text-white">
            <span
              style={{
                fontSize: "x-large",
                marginLeft: "10px",
                color: "text-secondary",
              }}
            >
              Radha Vilas
            </span>

            <div>
              <button
                class="btn btn-light"
                type="button"
                style={{ marginLeft: "10vh" }}
                onClick={() => loginWithRedirect()}
              >
                Login
              </button>
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Temp />}></Route>
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
