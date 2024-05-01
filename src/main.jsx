import React from "react";
import ReactDOM from "react-dom/client";

import ErrorPage from "./pages/errorpage.jsx";
import App from "./App.jsx";
import AboutUs from "./pages/about-us.jsx";
import Services from "./pages/services.jsx";
import TyreTech from "./pages/tyre-tech.jsx";
import ContactUs from "./pages/contact-us.jsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Sidlesham-Tyres/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Sidlesham-Tyres/about/",
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Sidlesham-Tyres/services/",
    element: <Services />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Sidlesham-Tyres/tyre-tech/",
    element: <TyreTech />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Sidlesham-Tyres/contact/",
    element: <ContactUs />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
