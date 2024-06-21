import React from "react";
import { Link } from "react-router-dom";
import { MultiHeaderType } from "./models";

const MultiHeader: React.FC<MultiHeaderType> = ({
  locationWindow
}) => {
  return (
    <div className="bg-blue-400 py-8 px-4 flex justify-between" >
      <h1 className="text-white text-4xl font-bold">{locationWindow}</h1>
      <Link to={"/"}>
        <button className="px-5 py-3 bg-teal-800 rounded-md">
          <span className="text-white">Back to home</span>
        </button>
      </Link>
    </div >
  )
}

export default MultiHeader;