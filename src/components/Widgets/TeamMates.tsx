/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react'
import Image from 'next/image'
import { RiInstagramLine, RiTwitterLine } from 'react-icons/ri';
import Link from 'next/link';

const TeamMates = ({
    img,
    name,
    title,   
    xProfile,
    IgProfile
} : any ) => {
  return (
    <div className='relative  grid place-items-center'>
        <Image src={img} width={1000} height={1000} alt={name} className='object-cover  h-[300px] rounded-xl' />
        <div className='flex flex-col text-center justify-center'>
            <h4 className='text-3xl font-semibold' style={{
                textShadow: '2px 2px #ff000'
            }}>
                {name} 
            </h4>
            <p>
                {title}
            </p>

            <div className="flex gap-2 items-center justify-center mx-auto">
                <Link href={xProfile}>
                    <RiTwitterLine  size={25}/>
                </Link>
                <Link href={IgProfile}>
                    <RiInstagramLine size={25} />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default TeamMates