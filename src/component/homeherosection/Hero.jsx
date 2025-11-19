import React from "react";
import "./Hero.css";
import me from "../../assets/me.jpg";

function Hero() {
  return (
    <section className="">
      <div id="hero" className="flex-container h-screen ">
        <div className="ml-6 p-5 text-center">
          <span className=" font-bold">Hello,</span>
          <h2 className=" ">
            I'm{" "}
            <span className="text-blue-600 uppercase font-bold">
              {" "}
              ibe enoch okechukwu
            </span>
          </h2>
          <h1 className="text-2xl">Web Developer.</h1>
          <p className="">
            I am skiled Web Developer with expierences in creating visually
            appealing and user-friendly websites.
          </p>
          <button className="rounded-full mt-4 m-auto text-sm flex">
            <a
              href="#"
              className=" text-black p-2 rounded-4xl w-28 border border-transparent bg-white shadow-[0_0_20px_white]"
            >
              {" "}
              <i class="fa fa-envelope-open" aria-hidden="true"></i>
              Hire Me
            </a>

            <a
              href="#"
              className=" m-auto text-black p-2 rounded-4xl w-28 border border-transparent bg-white shadow-[0_0_20px_white]"
            >
              {" "}
              Resume
            </a>
          </button>
        </div>
        <div>
          {" "}
          <img
            src={me}
            alt="me"
            className="h-70 w-70 m-auto object-cover border-4 border-gray-300 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
