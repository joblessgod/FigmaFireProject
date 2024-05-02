import React from "react";
import { Link } from "react-router-dom";

export default function BreadCrumb() {
  return (
    <div className=" bg-[#F6F5FF]">
      <div className="container ">
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
    </div>
  );
}
