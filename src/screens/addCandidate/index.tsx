import React from "react";
import MultiHeader from "../../components/multiHeader";
import CandidateForm from "./components/forms";

const AddCandidate: React.FC = () => {
  return (
    <div>
      <MultiHeader locationWindow="Add Candidate" />
      <div className="container mx-auto mt-6">
        <h3 className="text-center font-bold text-3xl">Please fill details bellow</h3>
      </div>
      <div className="w-[50%] mx-auto">
        <CandidateForm />
      </div>
    </div>
  )
}

export default AddCandidate;