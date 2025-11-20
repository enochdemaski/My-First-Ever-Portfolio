import React from "react";
import "./Hero.css";
import me from "../../assets/me.jpg";

function Hero() {
  return (
    <section className="">
      <div id="hero" className="flex-container  ">
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
          <p className=" text-shadow-md  mt-4">
            I am skiled Web Developer with expierences in creating visually
            appealing and user-friendly websites and Web App for all purpose. I
            am skiled Web Developer with expierences in creating visually
            appealing and user-friendly websites and Web App for all purpose.
          </p>

          <div className=" mt-3 p-7 flex gap-3 items-center justify-center w-67 m-auto  text-gray-800 rounded-full  h-7">
            <div className="border-3 border-black-500 rounded-full text-3xl p-1">
              {" "}
              <a href="#">
                <i class="fa fa-envelope-open" aria-hidden="true"></i>
              </a>
            </div>
            <div className="border-3 border-black-500 rounded-full text-3xl p-1">
              {" "}
              <a href="#">
                <i class="fa fa-envelope-open" aria-hidden="true"></i>
              </a>
            </div>
            <div className="border-3 border-black-500 rounded-full text-3xl p-1">
              {" "}
              <a href="#">
                <i class="fa fa-envelope-open" aria-hidden="true"></i>
              </a>
            </div>
            <div className="border-3 border-black-500 rounded-full text-3xl p-1">
              {" "}
              <a href="#">
                <i class="fa fa-envelope-open" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <button className="flex gap-8 m-auto mt-4 p-2  w-90">
            <a
              href="#"
              className=" text-black p-3 rounded-4xl w-35  border border-transparent bg-white shadow-[0_0_20px_white]"
            >
              {" "}
              <i class="fa fa-envelope-open" aria-hidden="true"></i>
              Hire Me
            </a>

            <a
              href="#"
              className=" m-auto text-black p-3 rounded-4xl w-35  border border-transparent bg-white shadow-[0_0_20px_white]"
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
            className="h-90 w-90 m-auto mt-3 object-cover border-4 border-gray-300 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
