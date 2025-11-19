import React from "react";
import "./Hero.css";
import me from "../../assets/me.jpg";

function Hero() {
  return (
    <section className="">
      <div id="hero" className="flex-container h-screen ">
        <div className="ml-5 mt-10 p-5 text-center ">
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
          <p className=" text-shadow-md mt-4 ">
            I am skiled Web Developer with expierences in creating visually
            appealing and user-friendly websites and Web App for all purposes
          </p>

          <div className=" mt-3 pt-1 flex gap-3 items-center justify-center w-47 m-auto text-black rounded-full bg-white h-7">
            <i class="fa fa-envelope-open" aria-hidden="true"></i>
            <i class="fa fa-envelope-open" aria-hidden="true"></i>
            <i class="fa fa-envelope-open" aria-hidden="true"></i>
            <i class="fa fa-envelope-open" aria-hidden="true"></i>
          </div>

          <button className="flex gap-10 m-auto mt-4">
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
