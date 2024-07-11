import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import App from "./App";
import Clicker from "./Clicker";
import Glass from "./Glass";
import Taupe from "./Taupe";
// import App from './forgemanie';
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/squares",
    element: <Glass />,
  },
  {
    path: "/clicker",
    element: <Clicker />,
  },
  {
    path: "/mole",
    element: <Taupe />,
  },
  {
    path: "/modify",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
