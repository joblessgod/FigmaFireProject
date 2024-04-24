import React from "react"
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Header from "./components/Header";

/* Pages Import */
import Login from "./pages/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "pages",
        element: (
          <h1>Pages</h1>
        )
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "blogs",
        element: <Blogs />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "login",
        element: (
          <h1><Login/></h1>
        ),
      },
      {
        path: "signup",
        element: (
          <h1><Signup/></h1>
        ),
      },
    ]
  },
]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
