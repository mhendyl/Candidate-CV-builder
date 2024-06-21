import React from "react"
import Header from "./components/header";
import { mockDataCandidates } from "./mockCandidates";
import Card from "./components/cards";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div id="container" className="container mt-5 mx-auto">
        <div className="flex justify-end mb-10">
          <Link to={'/add-candidate'}>
            <button className="px-5 py-3 border border-green-800 rounded-lg hover:bg-green-800">
              <span className="hover:text-white">+ Add Candidate</span>
            </button>
          </Link>
        </div>
        {mockDataCandidates.length > 0 ? mockDataCandidates?.map((candidate, index) => (
          <Card data={candidate} index={index} key={index} />
        ))
          : (
            <div className="text-center">
              <span className=" font-bold text-2xl">No Candidates...</span>
            </div>
          )}
      </div>
    </div>
  )
}

export default Home;