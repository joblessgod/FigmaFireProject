import React from "react";
import { Link } from "react-router-dom";
import footerImg from "/assets/loginFooter.png";
import BreadCrumb from "../components/BreadCrumb";
import axios from "axios";

export default function Signup() {
  function handleSubmit(e) {
    e.preventDefault();
    axios.post("https://ecommerce-sagartmg2.vercel.app/api/users/signup");
  }
  return (
    <>
      <BreadCrumb />
      <div className="mx-auto mt-[67px] flex w-[302px] items-center justify-center p-[28px] shadow-lg md:w-[544px]">
        <div className="font-lato space-y-2 p-[24px]  ">
          <div>
            <h1 className="mb-0 text-center font-Josefin text-[32px] font-bold">
              Signup
            </h1>
            <p className="mt-0 text-center text-[15px] text-[#9096B2]">
              Please login using account detail bellow.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                name="fullName"
                type="text"
                placeholder="Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                className="form-control"
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="form-group">
              <input
                className="form-control"
                name="password"
                type="password"
                required
                placeholder="Password"
              />
            </div>

            <div className="form-group">
              <select placeholder="Role" className="form-control" name="role">
                <option value="">Select Role</option>
                <option value="seller">seller</option>
                <option value="buyer">buyer</option>
              </select>
            </div>

            <a href="/forgetPassword" className="text-sm text-[#9096B2]">
              Forget Your Password ?
            </a>

            <button type="submit" className="btn w-full">
              Sign in
            </button>
          </form>

          <p className="text-gray-light">
            Don’t have an Account?
            <a href="/Signup" className="text-[#558cf3]">
              Create account
            </a>
          </p>
        </div>
      </div>
      <img src={footerImg} className="container my-[40px]" />
    </>
  );
}
``;
