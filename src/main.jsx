import React from "react";
import ReactDOM from "react-dom/client";

import ErrorPage from "./pages/errorpage.jsx";
import App from "./App.jsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Sidlesham-Tyres/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
