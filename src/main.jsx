import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AddCoffee from "./Components/AddCoffee/AddCoffee.jsx";
import EditCoffee from "./Components/EditCoffee/EditCoffee.jsx";
import "./index.css";
import Error from "./pages/Error/Error.jsx";
import Root from "./pages/Root/Root.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "add_coffee",
        element: <AddCoffee />,
      },
      {
        path: "update_coffee/:id",
        element: <EditCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffee/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
