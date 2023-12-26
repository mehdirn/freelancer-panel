import React from 'react';

function TextField ({label , name , value , onChange}) {
  return (
    <div>
      <label className="mb-4 inline-block" htmlFor={name}>
         {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        className="textField-input"
        type="text"
        autoComplete='off'
      />
    </div>
  );
}

export default TextField;
