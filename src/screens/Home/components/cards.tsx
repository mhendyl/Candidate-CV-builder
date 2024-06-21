import React from "react";
import { CandidateData } from "../../../utils/models/models";
import { Link } from "react-router-dom";

type CardType = {
  data: CandidateData;
  index: number;
}

const Card: React.FC<CardType> = ({ data, index }) => {
  return (
    <Link to={`/edit-data/${index}`}>
      <button className="w-1/3">
        <div className="border border-gray-700 rounded-lg text-left px-5 py-3 mb-5 mx-4">
          <h5 className="text-xl font-bold">{data?.firstName} {data?.lastName}</h5>
          <p className="overflow-hidden text-ellipsis line-clamp-3">Descrition: {data?.description}</p>
        </div>
      </button>
    </Link>
  )
}

export default Card;