import React, { useState } from "react";
import { Link } from "react-router-dom";

/* Icons & Banners*/
import { IoMenu } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdOutlinePhoneInTalk } from "react-icons/md";

let emailId = "mhhasanul@gmail.com";
let phoneNo = "(12345)67890";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleSideMenu() {
    console.log("Side Menu open");
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header className="">
        {/* upper Nav */}
        <div className=" bg-primary">
          <nav className="font-josefin py-[14px]  text-white sm:container sm:flex sm:justify-between">
            <div className="text-center sm:flex sm:gap-4 ">
              <a
                href="mailto:mhhasanul@gmail.com"
                className="hover:text-secondary-light "
              >
                <IoMail className="inline-block align-middle" />
                mhhasanul@gmail.com
              </a>
              <a href="call:1234567890" className="hover:text-secondary-light ">
                <MdOutlinePhoneInTalk className="inline-block align-middle  " />
                (12345)67890
              </a>
            </div>

            <div className="justify-between">
              <select className="bg-transparent font-sans ">
                English
                <FaAngleDown className="inline-block" />
                <option className="dropdown">English</option>
                <option className="dropdown">Nepali</option>
                <option className="dropdown">Hindi</option>
                <option className="dropdown">Japanese</option>
                <option className="dropdown">Korean</option>
              </select>
              {/* <span className="font-sans " >
                  USD
                  <FaAngleDown className="inline-block" />
                </span> */}

              {/* <select> */}
              <select className="bg-transparent font-sans">
                USD
                <FaAngleDown className="inline-block" />
                <option className="dropdown">USD</option>
                <option className="dropdown">IND</option>
                <option className="dropdown">NPR</option>
              </select>

              <Link to="/login" className="font-sans">
                Login <IoLogIn className="inline-block" />
              </Link>
              <span className="font-sans">
                Wishlist <FaHeart className="inline-block" />
              </span>
              <span className="font-sans">
                <FaCartArrowDown className="inline-block" />
              </span>
            </div>
          </nav>
        </div>

        {/* Button Home Nav */}
        <nav className="container justify-between pb-[12px] pt-[18px] sm:flex">
          <div className="flex w-full items-center justify-between md:w-auto lg:w-auto lg:gap-[90px]">
            <Link
              to={"/"}
              className="leading-auto font-Josefin text-[34px] font-semibold text-primary-dark hover:text-secondary"
            >
              Hekto
            </Link>

            <div
              className={`${isMenuOpen ? "translate-x-0" : "translate-x-full"} fixed bottom-0 right-0 top-0 z-30 flex w-[50%] flex-col bg-[#313338] p-12 text-white transition-all ease-linear md:static md:w-auto md:flex-row md:gap-4 md:bg-transparent md:p-0 md:text-black `}
            >
              <IoMdClose
                className="cursor-pointer text-[4rem] md:hidden md:hover:text-red-600"
                onClick={toggleSideMenu}
              >
                Close
              </IoMdClose>
              {/* flex grow property */}

              <Link to="/" className="text-[#FB2E86]">
                Home
                <FaAngleDown className="inline-block" />
              </Link>

              <Link to="/pages" className="hover:text-secondary">
                Pages
              </Link>

              <Link to="/products" className="hover:text-secondary">
                Products
              </Link>

              <Link to="/blogs" className="hover:text-secondary">
                Blogs
              </Link>

              <Link to="/contact" className="hover:text-secondary">
                Contact
              </Link>
            </div>

            <IoMenu
              onClick={toggleSideMenu}
              className="cursor-pointer text-3xl md:hidden "
            />
          </div>

          <form className="hidden lg:flex">
            <input
              className="border-primary-light border px-2 py-1 focus:border-secondary focus:outline-none focus:transition-all "
              type="text"
              placeholder="Search"
            />

            <button className=" bg-secondary px-2">
              <IoSearch className="inline-block" />
            </button>
          </form>
        </nav>
      </header>

      <footer>
        {/* Buttom Navigation */}
        <div></div>

        {/* Copyright Claim */}
        <div></div>
      </footer>
    </>
  );
}
