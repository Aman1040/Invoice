import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import { PDFViewer } from "@react-pdf/renderer";
import Mydoc from "./Pages/Mydoc";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-iudmksioz134ormu.us.auth0.com"
    clientId="HXOGOhPzuRByjOexeWZQHFnuMiYZ8GyI"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);
