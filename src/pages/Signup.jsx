import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import footerImg from "/assets/loginFooter.png";
import BreadCrumb from "../components/BreadCrumb";
import axios from "axios";
import { toast } from "react-toastify";

export default function Signup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formDara, setFormData] = useState({
    name: "Sanchit",
    email: "sanchit@gmail.com",
    password: "sassword",
    role: "seller",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("https://ecommerce-sagartmg2.vercel.app/api/users/signup", {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        role: e.target.role.value,
      })
      .then((res) => {
        toast.success("Succesfully.");
        setIsLoading(false);
        // navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("someting went wrong.");
        setIsLoading(false);
      });
  }
  return (
    <>
      <BreadCrumb 
      title={"Sign Up"}
      links={[
        {title: "Home", url:"/"},
        {title: ". Signup", url:"#"},
      ]}
      />
      <div className="mx-auto mt-[67px] flex w-[302px] items-center justify-center p-[28px] shadow-lg md:w-[544px]">
        <div className="font-lato space-y-2 p-[24px]  ">
          <div>
            <h1 className="mb-0 text-center font-Josefin text-[32px] font-bold">
              Signup
            </h1>
            <p className="mt-0 text-center text-[15px] text-[#9096B2]">
              Please signup using account detail bellow.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                name="name"
                onChange={(e) => {
                  setFormData(e.target.value);
                }}
                value={formDara.name}
                type="text"
                placeholder="Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                className="form-control"
                name="email"
                value={formDara.email}
                type="email"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="form-group">
              <input
                className="form-control"
                name="password"
                value={formDara.password}
                type="password"
                required
                placeholder="Password"
              />
            </div>

            <div className="form-group">
              <select
                placeholder="Role"
                className="form-control"
                name="role"
                value={formDara.role}
              >
                <option value="">Select Role</option>
                <option value="seller">seller</option>
                <option value="buyer">buyer</option>
              </select>
            </div>

            <button disabled={isLoading} type="submit" className="btn w-full">
              {!isLoading ? "Sign in" : "Loading..."}
            </button>
          </form>

          <p className="text-gray-light">
            Have an Account?
            <Link to={"/login"} className="text-[#558cf3]">
              Login
            </Link>
          </p>
        </div>
      </div>
      <img src={footerImg} className="container my-[40px]" />
    </>
  );
}
``;