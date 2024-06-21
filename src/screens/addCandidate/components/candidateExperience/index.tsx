import React from "react";
import { Experience } from "../../../../utils/models/models";
import InputTextComponent from "../inputText/inputText";
import TextAreaComponent from "../textArea";

type CandidateExperiencesType = {
  dataExperiences: Experience[];
  handleExperienceChange: (
    index: number,
    field: keyof Experience,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const CandidateExperiences: React.FC<CandidateExperiencesType> = ({
  dataExperiences,
  handleExperienceChange
}) => {
  return (
    <div className="mt-5 w-full">
      {dataExperiences.map((exp: Experience, index: number) => (
        <div key={index} className="border-b border-gray-300 pb-5">
          <h3 className="px-10 font-bold text-2xl mt-5">Experience {index + 1}</h3>
          <div className='mt-5'>
            <InputTextComponent
              label='Title :'
              inputName={`jobTitle${index}`}
              value={exp.title}
              handleChange={(e) => handleExperienceChange(index, 'title', e)}
              required={true}
            />
          </div>
          <div className='mt-5'>
            <InputTextComponent
              label='Company :'
              inputName={`company${index}`}
              value={exp.company}
              handleChange={(e) => handleExperienceChange(index, 'company', e)}
              required={true}
            />
          </div>
          <div className='mt-5'>
            <InputTextComponent
              label='Location :'
              inputName={`location${index}`}
              value={exp.location}
              handleChange={(e) => handleExperienceChange(index, 'location', e)}
              required={true}
            />
          </div>
          <div className='mt-5'>
            <InputTextComponent
              label='Start Date :'
              inputName={`startDate${index}`}
              type="date"
              value={exp.startDate}
              handleChange={(e) => handleExperienceChange(index, 'startDate', e)}
              required={true}
            />
          </div>
          <div className='mt-5'>
            <InputTextComponent
              label='End Date :'
              inputName={`endDate${index}`}
              type="date"
              value={exp.endDate}
              handleChange={(e) => handleExperienceChange(index, 'endDate', e)}
              required={true}
            />
          </div>
          <div className="mt-5">
            <TextAreaComponent 
              label="Description :"
              textAreaName={`descriptionExperience${index}`}
              handleChange={(e) => handleExperienceChange(index, 'description', e)}
              value={exp.description}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default CandidateExperiences;