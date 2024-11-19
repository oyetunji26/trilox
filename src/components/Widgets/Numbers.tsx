'use client';
import React from 'react'
import Image from 'next/image'
import * as image from '../assets/images';

const Numbers = () => {
  return (
    <div className='min-h-[90vh] section  md:px-44 md:py-20 relative max-md:flex-col  gap-y-9'>
        <div className='flex justify-between max-md:py-3 pt-28 items-start max-md:text-center'>
            <div>
                <p className='text-5xl font-semibold flex '>
                    100 <span className='text-4xl font-normal'><em>m+</em></span>
                </p>
                <p className='text-lg'>Songs</p>
            </div>
            <Image src={image.Asake2} width={1000} height={1000} alt='asake' className=' rounded-full size-28 md:size-44 object-fill' />
        </div>
        <div className='text-5xl mx-auto text-center max-md:py-3 font-semibold'>
            <p>75<span className='text-4xl font-normal'><em>m+</em></span></p>
            <p className='text-lg'>Playlists</p>
        </div>
        <div className='flex   justify-between md:pt-28 max-md:py-3 items-start max-md:text-center'>
            <Image src={image.Asake3} width={1000} height={1000} alt='asake' className='rounded-full size-24 md:size-56 object-fill' />
            <div>
                <p className='text-5xl font-semibold'>
                    10<span className='text-4xl font-normal'><em>k+</em></span>
                </p>
                <p className='text-lg'>Artists</p>
            </div>
        </div>

        {/* <Image src={image.Asake2} width={1000} height={1000} alt='asake' className='absolute bottom-7 left-36 rounded-full size-52 object-fill' /> */}
        {/* <Image src={image.Asake2} width={1000} height={1000} alt='asake' className='absolute top-7 right-10 rounded-full size-52 object-fill' /> */}
    </div>
  )
}

export default Numbers