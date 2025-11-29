import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useEffect } from "react";

function Navbar() {
  // useEffect(() => {
  //   const toggle = document.getElementByClassName(".toggle");
  //   const menu = document.getElementByClassName(".menu");
  //   const handleClick = () => {
  //     menu.classList.toggle("hidden");
  //   };

  //   toggle.addEventListener("click", handleClick);
  // });
  return (
    <>
      <nav className=" h-20 sticky top-0 flex md:flex justify-between items-center p-2 bg-black/50">
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

        <button className="toggle md:hidden  text-3xl">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>

        <div className="menu fixed top-0 rigth-100 w-full leading-[30px] h-100 flex flex-col rounded-2xl px-50 items-center ml-[35%] mt-[80px] z-100 bg-white/30 md:hidden text-black">
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
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
