import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutRouter from "./routes/AboutRouter.jsx";
import HomerRouter from "./routes/HomerRouter.jsx";
import CareersRouter from './routes/CareersRouter.jsx'
import EventsRouter from './routes/EventsRouter.jsx'
import ProductsRouter from './routes/ProductsRouter.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomerRouter /> },
      { path: "/about", element: <AboutRouter /> },
      { path: "/careers", element: <CareersRouter /> },
      { path: "/events", element: <EventsRouter /> },
      { path: "/products", element: <ProductsRouter /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
