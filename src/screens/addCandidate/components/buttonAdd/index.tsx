import React from "react";

type AddButtonType = {
  onClick: () => void;
  label: string;
}

const AddButton: React.FC<AddButtonType> = ({
  onClick,
  label
}) => {
  return (
    <button
      type='button'
      className='px-5 py-3 bg-teal-800 rounded-md mx-10 mt-5 mb-5'
      onClick={onClick}
    >
      <span className='text-white'>{label}</span>
    </button>
  )
}

export default AddButton;