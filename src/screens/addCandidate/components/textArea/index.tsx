import React from "react";
import { TextAreaComponentType } from "./models";

const TextAreaComponent: React.FC<TextAreaComponentType> = ({
  label,
  id,
  textAreaName,
  value,
  handleChange,
  classNamesCustom,
  containerClassName,
  maxLength,
  required,
  smallText
}) => {
  return (
    <div className={`${containerClassName} px-10`}>
      <label>
        {label}
      </label>
      <textarea
       className={`border border-gray-600 rounded-md px-4 py-2 w-full ${classNamesCustom}`} 
       id={id} 
       maxLength={maxLength}
       name={textAreaName} 
       value={value} 
       onChange={handleChange} 
       required={required} />
       {smallText && (
        <p className="text-xs italic">{smallText}</p>
      )}
    </div>
  )
}

export default TextAreaComponent;