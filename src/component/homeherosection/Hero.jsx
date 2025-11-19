import React from "react";
import "./Hero.css";
import me from "../../assets/me.jpg";

function Hero() {
  return (
    <section className="">
      <div id="hero" className="flex-container h-screen ">
        <div className="ml-4 mt-10 p-5 text-center ">
          <span className=" font-bold text-3xl ">Hello,</span>
          <h2 className="text-2xl w-89  ">
            I'm{" "}
            <span className="text-blue-600 capitalize font-extrabold">
              {" "}
              ibe enoch okechukwu
            </span>
          </h2>
          <h1 className="text-2xl">
            A <span className="text-blue-600">Web Developer.</span>{" "}
          </h1>
          <p className=" text-shadow-md">
            I am skiled Web Developer with expierences in creating visually
            appealing and user-friendly websites.
          </p>
          <button className="rounded-full mt-4 m-auto text-sm flex gap-10">
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
        <div className="">
          {" "}
          <img
            src={me}
            alt="me"
            className="h-90 w-90 m-auto mt-7 object-cover border-4 border-gray-300 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
