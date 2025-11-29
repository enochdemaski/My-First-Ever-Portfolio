import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  // const bar = querySelector("bar");
  // const menu = querySelector("menu");
  // bar.addEventListener("click", () => {
  //   menu.classList.toggle("hidden");
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

        <button className="bar md:hidden  text-3xl">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>

        <ul className="menu hidden md:hidden flex-col bg-black/70 p-4 text-lg w-70 mt-30">
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
      </nav>
    </>
  );
}

export default Navbar;
