import React from "react";
import { Skill } from "../../../../utils/models/models";
import InputTextComponent from "../inputText/inputText";

type CandidateSkillsType = {
  dataSkill: Skill[];
  handleSkillChange: (
    index: number,
    field: keyof Skill,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  removeData: (index: number) => void;
}


const CandidateSkillsForm: React.FC<CandidateSkillsType> = ({
  dataSkill,
  handleSkillChange,
  removeData
}) => {
  return (
    <div>
      {dataSkill.map((data, index) => (
        <div key={index} className="border-b border-gray-300 pb-5 flex">
          <div className="w-2/5">
            <InputTextComponent
              label='Skills Name :'
              inputName={`certificateName${index}`}
              value={data.name}
              handleChange={(e) => { handleSkillChange(index, 'name', e) }}
              required={true}
            />
          </div>
          <div className="w-2/5">
            <InputTextComponent
              label='Skills Score :'
              inputName={`certificateDate${index}`}
              type="number"
              value={data.score}
              handleChange={(e) => { handleSkillChange(index, 'score', e) }}
              required={true}
            />
          </div>
          <div className="w-1/5 mt-auto">
            {index !== 0 && (
              <button
                type="button"
                className="bg-red-600 text-white mr-10 px-6 py-2 rounded-md my-auto"
                onClick={() => { removeData(index) }}>
                Remove
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CandidateSkillsForm;