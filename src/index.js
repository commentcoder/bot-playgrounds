import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Home from "./Home";
import CursorBot from "./CursorBot";
import ClickerBot from "./ClickerBot";
import ImageBot from "./ImageBot";
import TextBot from "./TextBot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/squares",
    element: <CursorBot />,
  },
  {
    path: "/clicker",
    element: <ClickerBot />,
  },
  {
    path: "/mole",
    element: <ImageBot />,
  },
  {
    path: "/modify",
    element: <TextBot />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
