import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DataProvider } from "./DataContext/DataContextProvider.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <DataProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DataProvider>
  </Router>
);
