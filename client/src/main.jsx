import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/homepage/HomePage";
import CollectionPage from "./pages/collection/CollectionPage";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import AdminPage from "./pages/adminpage/AdminPage";
import SignupPage from "./pages/signuppage/SignupPage";
import LoginPage from "./pages/loginpage/LoginPage"


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/collection",
        element: <CollectionPage />,
        loader: () => fetch("http://localhost:3310/api/articles"),
      },
      {
        path: "categories/:name",
        element: <CategoryPage />,
      },
      {
        path : "/admin",
        element : <AdminPage/>
      },
      {
        path : "/signup",
        element: <SignupPage/>
      },
      {
        path: "/login",
        element: <LoginPage/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
