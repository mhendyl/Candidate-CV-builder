import React from "react"
import InputTextComponent from "../inputText/inputText"
import { CandidateData } from "../../../../utils/models/models"
import TextAreaComponent from "../textArea";

type FormDetailsCandidateType = {
  candidateData: CandidateData,
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormDetailsCandidate: React.FC<FormDetailsCandidateType> = ({
  candidateData,
  handleChange
}) => {
  return (
    <div className="border-b border-gray-300 pb-5">
      <div className="flex mt-8">
        <div className='w-1/2'>
          <InputTextComponent
            label='First Name :'
            inputName='firstName'
            value={candidateData.firstName}
            handleChange={handleChange}
            required={true}
          />
        </div>
        <div className='w-1/2'>
          <InputTextComponent
            label='Last Name :'
            inputName='lastName'
            value={candidateData.lastName}
            handleChange={handleChange}
            required={true}
          />
        </div>
      </div>
      <div className='mt-5'>
        <InputTextComponent
          label='Email :'
          inputName='email'
          value={candidateData.email}
          handleChange={handleChange}
          required={true}
          type='email'
        />
      </div>
      <div className='mt-5'>
        <InputTextComponent
          label='Phone Number :'
          inputName='phoneNumber'
          value={candidateData.phoneNumber}
          handleChange={handleChange}
          maxLength={12}
          required={true}
        />
      </div>
      <div className='mt-5'>
        <InputTextComponent
          label='Address :'
          inputName='address'
          value={candidateData.address}
          handleChange={handleChange}
          required={true}
        />
      </div>
      <div className='mt-5'>
        <InputTextComponent
          label='LinkedIn :'
          inputName='linkedin'
          value={candidateData.linkedin}
          handleChange={handleChange}
        />
      </div>
      <div className='mt-5'>
        <TextAreaComponent
          label='Description:'
          textAreaName='description'
          required={true}
          value={candidateData.description}
          handleChange={handleChange}
        />
      </div>
    </div>
  )
}

export default FormDetailsCandidate;