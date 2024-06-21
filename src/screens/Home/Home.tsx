import React, { useEffect, useState } from "react"
import Header from "./components/header";
import Card from "./components/cards";
import { Link } from "react-router-dom";
import { CandidateData } from "../../utils/models/models";
import { fetchData } from "../../utils/helper";

const Home: React.FC = () => {
  const [candidateData, setCandidateData] = useState<CandidateData[]>([]);
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      setCandidateData(data);
    };
    loadData();
  }, []);
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
        {candidateData.length > 0 ? candidateData?.map((candidate: CandidateData, index: number) => (
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