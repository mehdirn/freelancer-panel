import React from 'react';

function RadioInput ({label, value , checked , onChange , name , id}) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        className="cursor-pointer w-4 h-4 accent-red-500 form-radio text-primary-900 focus:text-primary-900 focus:ring-primary-900 focus:ring-3"
        type="radio"
        name={name}
        id={value}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default RadioInput;
