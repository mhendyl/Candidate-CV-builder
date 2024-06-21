import React from "react";
import { InputTextComponentType } from "./models";

const InputTextComponent: React.FC<InputTextComponentType> = ({
  label,
  id,
  inputName,
  value,
  handleChange,
  type = "text",
  classNamesCustom,
  containerClassName,
  maxLength,
  required,
  smallText
}) => {
  return (
    <div className={`${containerClassName} px-10`}>
      <label htmlFor={inputName}>
        {label}
      </label>
      <br />
      <input 
      className={`border border-gray-600 rounded-md px-4 py-2 w-full ${classNamesCustom}`} 
      id={id} 
      maxLength={maxLength}
      type={type} 
      name={inputName} 
      value={value} 
      onChange={handleChange} 
      required={required}
      />
      {smallText && (
        <p className="text-xs italic">{smallText}</p>
      )}
    </div>
  )
}

export default InputTextComponent;