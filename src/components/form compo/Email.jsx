import React from 'react'
import { useState } from 'react';

export default function Email({setEmail}) {
  const [isValid, setValid] = useState(false);
  const [isEmpty, setEmpty] = useState(true)

  const handleInput = (e) =>{
    if(e.target.value){
      setEmpty(false);
      setEmail(e.target.value);
    }

    if(e.target.validity.valid)
      setValid(true);
    
    else if(!e.target.validity.valid)
      setValid(false);
  }
  return (
    <>
      <label htmlFor="email" className={`text-white py-5 ${isEmpty ? 'text-white' : 
                                                                  isValid ? 'text-green-300' : 'text-red-300'}`}>Email</label>
      <input id="email" type="email" required placeholder="jdelacruz@email.com" className={`px-3 py-3 rounded border-2 transition-all duration-500 
      border-gray-500  focus:placeholder-transparent placeholder-shown:bg-transparent placeholder-shown:border-gray-500
      ${!isEmpty ? "valid:bg-green-200 valid:border-green-500 focus:valid:border-green-500 invalid:bg-red-200 invalid:border-red-500 focus:invalid:border-red-500 focus:valid:bg-transparent focus:invalid:bg-transparent outline-none focus:text-white"
                : ""}
      `}
      onChange={handleInput} />
    </>
  )
}
