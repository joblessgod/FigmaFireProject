import React from "react";
import { Link } from "react-router-dom";
import footerImg from "/assets/loginFooter.png";

export default function Signup() {
  return (
    <>
      {/* Top Div with text */}
      <div className="container relative  bg-[#F6F5FF]">
        <div className=" mb-8 py-[39px] sm:py-[47px] md:py-[57px] lg:py-[68px] xl:py-[82px] xxl:py-[98px]">
          {/* text */}
          <h1 className=" font-Josefin text-[18px] sm:text-[16px] lg:text-[20px] xl:text-[25px] xxl:text-[36px]">
            My Account
          </h1>

          <div className=" flex gap-[5px] font-Lato text-[14px]">
            <Link to="/" className="hover:text-secondary">
              Home .
            </Link>
            <Link to="/pages" className="hover:text-secondary">
              Pages .
            </Link>
            <span className="text-secondary">My Account</span>
          </div>
        </div>
      </div>

      {/* Login Panel */}
      <div className="mx-auto mt-[67px] flex w-[302px] items-center justify-center p-[28px] shadow-lg md:w-[544px]">
        <div className="font-lato space-y-2 p-[24px]  ">
          <div>
            <h1 className="mb-0 text-center font-Josefin text-[32px] font-bold">
              Sign Up
            </h1>
            <p className="mt-0 text-center text-[15px] text-[#9096B2]">
              Please signup using account detail bellow.
            </p>
          </div>

          <div className="space-y-4 ">
            <input
              className="border-gray-light h-[36px] w-full rounded-[2px] border pl-[13px] focus:shadow-[0px_6px_25px_0px_rgba(0,0,0,0.4)] focus:outline-none sm:h-[43px] md:h-[52px]"
              type="email"
              title="Add Valid Email Address"
              placeholder="Email Address"
            />
            <input
              className="border-gray-light h-[36px] w-full rounded-[2px] border pl-[13px] focus:shadow-[0px_6px_25px_0px_rgba(0,0,0,0.4)] focus:outline-none sm:h-[43px] md:h-[52px]"
              type="password"
              title="Make Stronge Password"
              placeholder="Password"
            />
          </div>

          <a href="/forgetPassword" className="text-[#9096B2]">
            Forget Your Password
          </a>

          <button className="w-full rounded-[3px] bg-secondary py-[10px] text-white hover:bg-secondary-dark hover:shadow-[0px_3px_25px_0px_rgba(0,0,0,0.15)]">
            Sign in
          </button>
          <p className="text-gray-light">
            Have an Account?
            <Link
              to={"/login"}
              title="Create a New Account"
              className="text-[#558cf3]"
            >
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
