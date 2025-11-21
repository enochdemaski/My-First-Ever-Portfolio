import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <>
      <nav className=" ">
        <img
          src={logo}
          alt="logo"
          className="logo h-20 mt-2 object-cover w-20 border-2 rounded-full"
        />

        <div className=" ">
          <a href="#home" className="">
            Home
          </a>
          <a href="#about" className="">
            About
          </a>
          <a href="#portfolio" className="">
            Portfolio
          </a>
          <a
            href="#clients"
            className="
         "
          >
            Clients
          </a>
        </div>

        <button
          type="submit"
          className="navbtn bg-white h-7 w-30 m-1 text-black rounded-full capitalize"
        >
          <i class="fa fa-phone-square" aria-hidden="true"></i>
          contact me
        </button>
      </nav>
    </>
  );
}

export default Navbar;
