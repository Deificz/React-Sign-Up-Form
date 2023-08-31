import React from 'react'
import { useState } from 'react';

export default function LastName({setLastName}) {
  const [isValid, setValid] = useState(false);
  const [isEmpty, setEmpty] = useState(true)

  const handleInput = (e) =>{
    if(e.target.value){
      setEmpty(false);
      setLastName(e.target.value);
    }

    if(e.target.validity.valid)
      setValid(true);
    
    else if(!e.target.validity.valid)
      setValid(false);
  }
  return (
    <>
      <label htmlFor="last-name" className={`text-white py-5 ${isEmpty ? 'text-white' : 
                                                                  isValid ? 'text-green-300' : 'text-red-300'}`}>Last Name</label>
      <input id="last-name" type="text" required placeholder="Dela Cruz" autoCapitalize="on" pattern="^[^0-9]+$" className={`px-3 py-3 rounded border-2 transition-all duration-500 
      border-gray-500  focus:placeholder-transparent placeholder-shown:bg-transparent placeholder-shown:border-gray-500
      ${!isEmpty ? "valid:bg-green-200 valid:border-green-500 focus:valid:border-green-500 invalid:bg-red-200 invalid:border-red-500 focus:invalid:border-red-500 focus:valid:bg-transparent focus:invalid:bg-transparent outline-none focus:text-white"
                : ""}
      `}
      onChange={handleInput} />
    </>
  )
}
