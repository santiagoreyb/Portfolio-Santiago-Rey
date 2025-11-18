import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/AppRoutes.jsx";
import "./index.css";
import { Analytics } from "@vercel/analytics/react"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoutes />
    <Analytics />
  </React.StrictMode>
  
);
