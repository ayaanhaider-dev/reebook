import React from "react";
import ReactDOM from "react-dom/client";
import { FirebaseProvider } from "./Context/firebase";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>
);
