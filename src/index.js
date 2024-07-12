import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Home from "./Home";
import CursorBot from "./0_cursor_bot/CursorBot";
import ClickerBot from "./1_clicker_bot/ClickerBot";
import ImageBot from "./2_image_bot/ImageBot";
import TextBot from "./3_text_bot/TextBot";

const router = createHashRouter([
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
  {
    path: "/*",
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
