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
}


const CandidateSkillsForm: React.FC<CandidateSkillsType> = ({
  dataSkill,
  handleSkillChange
}) => {
  return (
    <div>
      {dataSkill.map((data, index) => (
        <div key={index} className="border-b border-gray-300 pb-5 flex">
          <div className="w-1/2">
            <InputTextComponent
              label='Skills Name :'
              inputName={`certificateName${index}`}
              value={data.name}
              handleChange={(e) => { handleSkillChange(index, 'name', e) }}
              required={true}
            />
          </div>
          <div className="w-1/2">
            <InputTextComponent
              label='Skills Score :'
              inputName={`certificateDate${index}`}
              type="number"
              value={data.score}
              handleChange={(e) => { handleSkillChange(index, 'score', e) }}
              required={true}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default CandidateSkillsForm;