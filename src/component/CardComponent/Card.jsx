import React from "react";
import "./Card.css";

export default function Card() {
  return (
    <div className=" flex flex-wrap gap-4 justify-center items-center lg: py-3 ">
      <div className="cardcontainer w-96 bg-gray-100 h-80 rounded-3xl shadow md:bases-1/2 lg:basis-1/5    ">
        <div className="child-card-container bg-gray-200 border-b-gray-950 border-2 p-2 h-30 rounded-3xl ">
          <p className="text-black capitalize text-centerm ">web development</p>
        </div>
      </div>
      <div className="cardcontainer w-96 bg-gray-100 h-80  rounded-3xl shadow md:bases-1/2 lg:basis-1/5    ">
        <div className="child-card-container bg-gray-200 border-b-gray-950 border-2 p-2 h-30 rounded-3xl">
          <p className="text-black capitalize text-centerm ">web development</p>
        </div>
      </div>
      <div className="cardcontainer w-96 bg-gray-100 h-80  rounded-3xl shadow md:bases-1/2 lg:basis-1/5   ">
        <div className="child-card-container bg-gray-200 border-b-gray-950 border-2 p-2 h-30 rounded-3xl">
          <p className="text-black capitalize text-centerm ">web development</p>
        </div>
      </div>
      <div className="cardcontainer w-96  bg-gray-100 h-80 rounded-3xl shadow md:bases-1/2 lg:basis-1/5   ">
        <div className="child-card-container bg-gray-200 border-b-gray-950 border-2 p-2 h-30 rounded-3xl">
          <p className="text-black capitalize text-centerm ">web development</p>
        </div>
      </div>
    </div>
  );
}
