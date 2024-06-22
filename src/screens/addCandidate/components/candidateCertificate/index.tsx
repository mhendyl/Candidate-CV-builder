import React from "react";
import { Certification } from "../../../../utils/models/models";
import InputTextComponent from "../inputText/inputText";


type CandidateEducationType = {
  dataCertificate: Certification[];
  handleCertificationChange: (
    index: number,
    field: keyof Certification,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  removeData: (index: number) => void;
}

const CandidateCertificateForm: React.FC<CandidateEducationType> = ({
  handleCertificationChange,
  dataCertificate,
  removeData
}) => {
  return (
    <div>
      {dataCertificate.map((data, index) => (
        <div key={index} className="border-b border-gray-300 pb-5 flex">
          <div className="w-2/5">
            <InputTextComponent
              label='Certificate Name :'
              inputName={`certificateName${index}`}
              value={data.name}
              handleChange={(e) => { handleCertificationChange(index, 'name', e) }}
              required={true}
            />
          </div>
          <div className="w-2/5">
            <InputTextComponent
              label='Certificate Date :'
              inputName={`certificateDate${index}`}
              type="date"
              value={data.date}
              handleChange={(e) => { handleCertificationChange(index, 'date', e) }}
              required={true}
            />
          </div>
          <div className="w-1/5 mt-auto">
            {index !== 0 && (
              <button
                type="button"
                className="bg-red-600 text-white mr-10 px-6 py-2 rounded-md"
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

export default CandidateCertificateForm;