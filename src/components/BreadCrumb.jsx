import React from "react";
import { Link } from "react-router-dom";

export default function BreadCrumb({ title, links }) {
  return (
    <div className=" bg-[#F6F5FF]">
      <div className="container ">
        <div className=" mb-8 py-[39px] sm:py-[47px] md:py-[57px] lg:py-[68px] xl:py-[82px] xxl:py-[98px]">
          <h1 className=" font-Josefin text-[18px] sm:text-[16px] lg:text-[20px] xl:text-[25px] xxl:text-[36px]">
            {title}
          </h1>
          {links.map((link, index) => {
            return (
              <Link
                className={`mr-2 ${index + 1 == links.length ? "text-secondary" : ""}`}
                to={link.url}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
