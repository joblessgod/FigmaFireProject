import axios from "axios";
import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setReduxUser } from "./redux/slice/user";

/* Pages Import */
import Home from "./components/home/Home";
import RootComponent from "./components/Common/RootComponent";
import Slug from "./pages/products/Slug";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Pages from "./pages/Pages";
import LoadingScreen from "./components/Common/LoadingScreen";
import Products from "./components/home/Product";
import Cart from "./pages/Cart";

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
        children: [
          {
            path: ":slug",
            element: <Slug />,
          },
        ],
      },
      {
        path: "pages",
        element: <Pages />,
      },
      {
        path: "cart",
        element: <Cart />,
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
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (token) {
      axios
        .get("https://ecommerce-sagartmg2.vercel.app/api/users/get-user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(setReduxUser(res.data));
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>{isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}</>
  );
}

export default App;
