import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <>
      <nav className="nav  h-20 w-screen max-w-7xl py-4 px-8 flex items-center justify-between sticky top-0 z-3">
        <img
          src={logo}
          alt="logo"
          className="logo h-20 mt-2 object-cover w-20 border-2 rounded-full"
        />

        <div className="navmenu flex gap-8 cursor-pointer text-gray-900">
          <a
            href="#home"
            className="navlink one hover:w-20 hover:text-center 
             hover:rounded-full hover:text-neutral-950 
            hover:border-b-2 hover:bg-white 
            hover:shadow-[0_0_20px_white]"
          >
            Home
          </a>
          <a
            href="#about"
            className="navlink two hover:w-20 hover:text-center 
            
             hover:rounded-full hover:text-neutral-950 
            hover:border-b-2 hover:bg-white 
            hover:shadow-[0_0_20px_white]"
          >
            About
          </a>
          <a
            href="#portfolio"
            className="navlink three hover:w-20 hover:text-center 
             hover:rounded-full hover:text-neutral-950 
            hover:border-b-2 hover:bg-white 
            hover:shadow-[0_0_20px_white]"
          >
            Portfolio
          </a>
          <a
            href="#clients"
            className="navlink four hover:w-20 hover:text-center 
             hover:rounded-full hover:text-neutral-950 
            hover:border-b-2 hover:bg-white 
            hover:shadow-[0_0_20px_white]"
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
