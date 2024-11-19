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
    <>
    <div className=" rounded-3xl h-[65vh] md:max-h-[65vh]  shadow bg-albumcover relative mt-10">
                <Image src={img} width={1000} height={1000} alt="" className=' rounded-3xl w-full h-full object-cover' />
                {/* <span className="absolute top-4 right-4 px-2 flex items-center gap-1.5 py-1 text-xs bg-black/40 rounded-3xl border border-white/40">
                  TRENDING <MdLocalFireDepartment size={17} />
                </span> */}
                <div className="h-1/8 absolute bottom-0 bg-black/30 glass w-full py-6 rounded-b-2xl px-7 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl capitalize text-white">
                        {name}
                    </h2>
                    <p className="text-sm text-white/70">
                        {title}
                    </p>
                  </div>

                  <div className="flex gap-3 items-center">
                    <button className="rounded-full p-2 text-white bg-purple-400  ">
                    <Link href={xProfile}>
                        <RiInstagramLine size={25} />
                    </Link>
                    </button>
                    <Link href={IgProfile}>
                        <RiTwitterLine size={25} />
                    </Link>
                  </div>
                </div>
              </div>
    {/* <div className='relative  grid place-items-center'>
        <Image src={img} width={1000} height={1000} alt={name} className='object-cover  h-[300px] rounded-xl' />
        <div className='flex flex-col text-center justify-center'>
            <h4 className='md:text-3xl text-2xl font-semibold' style={{
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
    </div> */}
    </>
  )
}

export default TeamMates