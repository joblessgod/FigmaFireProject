import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* Pages Import */
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Pages from "./pages/Pages";
import Products from "./pages/Products";
import RootComponent from "./components/RootComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootComponent />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "products",
        element: <Products />,
      },
      {
        path: "pages",
        element: <Pages />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: (
          <h1>
            <Signup />
          </h1>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
