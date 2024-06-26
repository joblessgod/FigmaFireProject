import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BreadCrumb from "../components/Common/BreadCrumb";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setReduxUser } from "../redux/slice/user";

export default function Login() {
  const dispatch = useDispatch(); // we can only call dispath via useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "b@b.com",
    password: "password",
  });

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("https://ecommerce-sagartmg2.vercel.app/api/users/login", {
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        dispatch(setReduxUser(res.data.user));
        toast.success("Successfully Logged In.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Bad Request!");
      });
  }

  return (
    <>
      {/* Top Div with text */}
      <BreadCrumb
        title="Login"
        links={[
          { title: "Home", url: "/" },
          { title: ". Pages", url: "/pages" },
          { title: ". Login", url: "#" },
        ]}
      />
      {/* Login Panel */}
      <div className="mx-auto mt-[67px] flex w-[302px] items-center justify-center p-[28px] shadow-lg md:w-[544px]">
        <div className="font-lato space-y-2 p-[24px]  ">
          <div>
            <h1 className="mb-0 text-center font-Josefin text-[32px] font-bold">
              Login
            </h1>
            <p className="mt-0 text-center text-[15px] text-[#9096B2]">
              Please login using account detail bellow.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4 ">
              <input
                className="h-[36px] w-full rounded-[2px] border border-gray-light pl-[13px] focus:shadow-[0px_6px_25px_0px_rgba(0,0,0,0.4)] focus:outline-none sm:h-[43px] md:h-[52px]"
                type="email"
                name="email"
                onChange={(e) => {
                  setFormData(e.target.value);
                }}
                value={formData.email}
                title="Add Valid Email Address"
                placeholder="Email Address"
              />
              <input
                className="h-[36px] w-full rounded-[2px] border border-gray-light pl-[13px] focus:shadow-[0px_6px_25px_0px_rgba(0,0,0,0.4)] focus:outline-none sm:h-[43px] md:h-[52px]"
                type="password"
                name="password"
                onChange={(e) => {
                  setFormData(e.target.value);
                }}
                value={formData.password}
                title="Make Stronge Password"
                placeholder="Password"
              />
            </div>

            <Link to="/forgetYourPassword" className="mt-4 text-[#9096B2]">
              Forget Password ?
            </Link>

            <div className="text-gray-light">
              <input type="checkbox"></input> Stay logged in
            </div>

            <button className="w-full rounded-[3px] bg-secondary py-[10px] text-white hover:bg-secondary-dark hover:shadow-[0px_3px_25px_0px_rgba(0,0,0,0.15)]">
              Sign in
            </button>
          </form>
          <p className="text-gray-light">
            Not a member?{" "}
            <Link
              to={"/signup"}
              title="Create a New Account"
              className="text-[#558cf3]"
            >
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
``;
