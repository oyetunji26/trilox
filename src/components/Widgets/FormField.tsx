/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react'


const FormField = ({type, value, placeholder, otherStyles, handleChange} : any) => {
  return (
    <div>
        {
          type == 'textarea' ? (
            <textarea placeholder={placeholder} value={value} className={`py-3 px-2 w-full border rounded-lg ${otherStyles}`} onChange={handleChange} rows={4} />
          )
          :
          (
            <input type={type} placeholder={placeholder} value={value} className={`py-3 px-2 w-full border rounded-lg ${otherStyles}`} onChange={handleChange}/>
          )
        }
    </div>
  )
}

export default FormField