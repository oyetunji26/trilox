/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

interface titleProps {
    title: string,
    otherStyles? : any
}

const SectionTitle = (
    {
        title,
        otherStyles
    } : titleProps
) => {
  return (
    <div className={`text-4xl text-center ${otherStyles}`}>
        {title}
    </div>
  )
}

export default SectionTitle