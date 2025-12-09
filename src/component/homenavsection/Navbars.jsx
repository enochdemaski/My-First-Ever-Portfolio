import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const togglemenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className=" h-20 sticky top-0 z-100  flex md:flex justify-between items-center p-2 bg-black/70">
        <div>
          <a href="#">
            <img
              src={logo}
              alt="logo"
              className=" h-15 w-15 md:mt-2 object-cover  border-2 rounded-full"
            />
          </a>
        </div>

        <ul className="hidden md:flex gap-10 ">
          <li>
            <a href="#home" className="">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="">
              Projects
            </a>
          </li>
          <li>
            <a href="#clients" className="">
              Clients
            </a>
          </li>
        </ul>

        <button
          type="submit"
          className="navbtn hidden md:bg-white md:block h-7 w-30 m-1 text-black rounded-full capitalize"
        >
          <a href="#">
            <i class="fa fa-phone-square" aria-hidden="true"></i>
            contact me
          </a>
        </button>

        {/* For mobile menu */}

        <button
          id="toggles"
          onClick={togglemenu}
          className="toggle md:hidden  text-3xl hover:cursor-pointer border-2 border-white rounded-full p-1 z-100"
        >
          {isMenuOpen ? `Close` : `Open`}
        </button>

        {isMenuOpen && (
          <div
            id="menus"
            className="menu fixed top-0 rigth-100 w-full leading-[35px] h-screen flex flex-col px-10 py-18 ml-[35%] bg-white/90 rounded-4xl  sm:hidden text-black"
          >
            <ul>
              <li>
                <a href="#home" className="">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="">
                  Projects
                </a>
              </li>
              <li>
                <a href="#clients" className="">
                  Clients
                </a>
              </li>

              <li>
                <a href="#clients" className="">
                  <i class="fa fa-phone-square" aria-hidden="true"></i>
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
