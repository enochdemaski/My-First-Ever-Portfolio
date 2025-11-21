import React from "react";
import "./Card.css";

export default function Card() {
  return (
    <div className=" bg-blue flex flex-wrap gap-4 justify-center items-center  lg: ">
      <div className="cardcontainer   w-96 bg-gray-100 h-80 rounded-3xl shadow md:bases-1/2 lg:basis-1/5 lg:w-[100]    ">
        <div className="child-card-container bg-gray-200 border-b-gray-950 border-2 p-2 h-30 rounded-3xl ">
          <p className="text-black capitalize text-center">web development</p>
        </div>
      </div>
      <div className="cardcontainer  w-96 bg-gray-100 h-80  rounded-3xl shadow md:bases-1/2 lg:basis-1/5 lg:w-[100]    ">
        <div className="child-card-container bg-gray-200 border-b-gray-950 border-2 p-2 h-30 rounded-3xl">
          <p className="text-black capitalize text-center">Graphic Design</p>
        </div>
      </div>
      <div className="cardcontainer  w-96 bg-gray-100 h-80  rounded-3xl shadow md:bases-1/2 lg:basis-1/5 lg:w-[100]   ">
        <div className="child-card-container bg-gray-200 border-b-gray-950 border-2 p-2 h-30 rounded-3xl">
          <p className="text-black capitalize text-center">Video Editing</p>
        </div>
      </div>
      <div className="cardcontainer  w-96  bg-gray-100 h-80 rounded-3xl shadow md:bases-1/2 lg:basis-1/5 lg:w-[100]   ">
        <div className="child-card-container bg-gray-200 border-b-gray-950 border-2 p-2 h-30 rounded-3xl">
          <p className="text-black capitalize text-center">Economist</p>
        </div>
      </div>
    </div>
  );
}
