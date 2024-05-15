import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { useDispatch } from "react-redux";
import { setReduxUser } from "./redux/slice/user";

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
    <>
      {isLoading ? (
        <div className="flex h-screen items-center justify-center">
          <button class="loader__btn">
            <div class="loader"></div>
            Loading
          </button>
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;
