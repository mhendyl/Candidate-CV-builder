import React from "react"
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="bg-blue-400 py-8 px-4 flex justify-between" >
      <h1 className="text-white text-4xl font-bold">List candidate</h1>
      <Link to={"/cv-builder"}>
        <button className="px-5 py-3 bg-teal-800 rounded-md">
          <span className="text-white">Create CV Template</span>
        </button>
      </Link>
    </div >
  )
}

export default Header;