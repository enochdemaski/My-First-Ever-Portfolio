import React from "react";
import "./Card.css";

export default function Card({ title, name, id }) {
  return (
    <div className="cardcontainer shadow-[0_0_20px_white] mt-5 w-96 bg-gray-500 h-80 rounded-3xl  md:bases-1/2 lg:basis-1/5 lg:w-full">
      <div className="child-card-container bg-gray-200 border-b-gray-950 border-2 p-2 h-30 rounded-3xl ">
        <p className="text-black">{id}</p>
        <h1 className="text-black capitalize text-center">{title}</h1>
        <h2 className="text-black capitalize text-center">{name}</h2>
      </div>
    </div>
  );
}
