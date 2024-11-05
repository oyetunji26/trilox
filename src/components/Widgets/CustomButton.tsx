/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

const CustomButton = ({
    title,
    handlePress,
    otherStyles,
    isLoading
} : any) => {
  return (
    <button className={`bg-gray-700 py-1.5 px-2 text-white w-fit rounded-lg ${otherStyles} ${isLoading ? 'bg-opacity-50' : ''}`} onClick={handlePress}>
        {title}
    </button>
  )
}

export default CustomButton