import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

import "./css/tailwind.css";
import "./css/font.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);