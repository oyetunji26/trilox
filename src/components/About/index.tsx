'use client';
import React from 'react'
import Image from 'next/image'
import * as image from '../assets/images'


const About = () => {
  return (
    <div className='section py-4 md:py-10' id='about'>
        <div className="grid md:grid-cols-2 max-md:flex max-md:flex-col-reverse mt-40 gap-5 items-center">
            <div className='z-50'>
                <Image src={image.Asake5} width={1000} height={1000} alt='askae' className='obk  md:h-[80vh] object-cover w-5/6 mx-auto rounded-3xl md:-mb-20 z-50' />
            </div>
            <div className='flex flex-col gap-4 text-gray-800'>
                <h3 className='text-xl font-semibold'>ABOUT STONEGATE</h3>
                <h2 className='text-5xl font-semibold text-slate-800 text-pretty'>
                    WE ROAR LOUD, REALLY LOUD.
                </h2>
                <p className='text-sm'>
                    Trilox is Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam quis nostrud tempor dolore adispa dolore magna consecteur labore
                </p>
                <div className='grid grid-cols-2 items-center'>
                    <h3 className='text-sm'>
                        Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna veniam quis nostrud tempor
                    </h3>
                    <div className='flex flex-col gap-2'>
                        <Image src={image.Signature} alt='signature' width={400} height={400}  />
                        <p className='text-black/90'>
                            OLOLADE ASAKE <span className='text-gray-900'>- Vocalist</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About