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
          <p className=" text-shadow-md text-sm  mt-4">
            Welcome to my creative space! I’m a multidisciplinary digital
            creator with a passion for building visually engaging and
            user-focused experiences. Whether I’m developing responsive
            websites, crafting eye-catching graphics, or editing compelling
            video stories, my goal is always the same: bring ideas to life with
            clarity, creativity, and purpose. I love combining clean design,
            smooth functionality, and thoughtful storytelling to create work
            that not only looks good but also delivers real impact. Take a look
            around — I’m excited to share my world with you.
          </p>
          {/* <div className=" mt-3 p-7 flex gap-3 items-center justify-center w-67 m-auto  text-gray-800 rounded-full  h-7">
            <div className="border-3 border-black-500 rounded-full text-3xl p-1">
              {" "}
              <a href="#">
                <img
                  src="c:\Users\MASKI\Downloads\linkedin-svgrepo-com.svg"
                  alt="linkedin"
                />
              </a>
            </div>
            <div className="border-3 border-black-500 rounded-full text-3xl p-1">
              {" "}
              <a href="#">
                <img
                  src="c:\Users\MASKI\Downloads\linkedin-svgrepo-com.svg"
                  alt="linkedin"
                />
              </a>
            </div>
            <div className="border-3 border-black-500 rounded-full text-3xl p-1">
              {" "}
              <a href="#">
                <img
                  src="c:\Users\MASKI\Downloads\facebook-svgrepo-com.svg"
                  alt="fb"
                />
              </a>
            </div>
            <div className="border-3 border-black-500 rounded-full text-3xl p-1">
              {" "}
              <a href="#">
                <img
                  src="c:\Users\MASKI\Downloads\github-svgrepo-com.svg"
                  alt="git"
                />
              </a>
            </div>
          </div> */}

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
