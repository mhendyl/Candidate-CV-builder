import React from "react";
import { Education } from "../../../../utils/models/models";
import InputTextComponent from "../inputText/inputText";
import TextAreaComponent from "../textArea";

type CandidateEducationType = {
  dataEducation: Education[];
  handleEducationChange: (
    index: number,
    field: keyof Education,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const CandidateEducational: React.FC<CandidateEducationType> = ({
  dataEducation, 
  handleEducationChange
}) => {
  return (
    <div>
      {dataEducation.map((edu: Education, index: number) => (
        <div key={index} className="border-b border-gray-300 pb-5">
          <h3 className="px-10 font-bold text-2xl mt-5">Education {index + 1}</h3>
          <div className='mt-5'>
            <InputTextComponent
              label='Degree :'
              inputName={`degree${index}`}
              value={edu.degree}
              handleChange={(e) => handleEducationChange(index, 'degree', e)}
              required={true}
            />
          </div>
          <div className='mt-5'>
            <InputTextComponent
              label='Major :'
              inputName={`company${index}`}
              value={edu.major}
              handleChange={(e) => handleEducationChange(index, 'major', e)}
              required={true}
            />
          </div>
          <div className='mt-5'>
            <InputTextComponent
              label='University :'
              inputName={`university${index}`}
              value={edu.university}
              handleChange={(e) => handleEducationChange(index, 'university', e)}
              required={true}
            />
          </div>
          <div className='mt-5'>
            <InputTextComponent
              label='Location :'
              inputName={`location${index}`}
              value={edu.location}
              handleChange={(e) => handleEducationChange(index, 'location', e)}
              required={true}
            />
          </div>
          <div className='mt-5'>
            <InputTextComponent
              label='Start Date :'
              inputName={`startDate${index}`}
              type="date"
              value={edu.startDate}
              handleChange={(e) => handleEducationChange(index, 'startDate', e)}
              required={true}
            />
          </div>
          <div className='mt-5'>
            <InputTextComponent
              label='End Date :'
              inputName={`endDate${index}`}
              type="date"
              value={edu.endDate}
              handleChange={(e) => handleEducationChange(index, 'endDate', e)}
              required={true}
            />
          </div>
          <div className="mt-5">
            <TextAreaComponent 
              label="Description :"
              textAreaName={`descriptionExperience${index}`}
              handleChange={(e) => handleEducationChange(index, 'description', e)}
              value={edu.description}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default CandidateEducational;