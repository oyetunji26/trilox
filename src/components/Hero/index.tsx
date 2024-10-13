'use client';
import { Ribeye } from 'next/font/google';
import React from 'react';
import Image from 'next/image';
import * as image from '../assets/images';
import { RxArrowTopRight } from "react-icons/rx";
import { MdOutlineSpatialAudio } from "react-icons/md";
import { IoPlaySkipForward, IoPlay } from "react-icons/io5";
import { MdLocalFireDepartment } from "react-icons/md";
// import { IoPlay } from "react-icons/io5";
import { FaFaceGrinStars } from "react-icons/fa6";
import { RiMusic2Line } from 'react-icons/ri';
import { TbMusicStar } from 'react-icons/tb';

const Hero = () => {
  return (
    <div className='bg-black h-[70vh] text-white section overflow-y-visible'>
      <div className="grid grid-cols-2 items-center gap-4">
        <div className=' text-right -mt-10 leading-relaxed relative'>
        {/* <FaFaceGrinStars size={45} className='absolute top-0 -left-7 text-white/60'/> */}
        <TbMusicStar size={45} className='absolute top-0 left-7 text-white/60 text-purple-600'/>
        
          <h2 className='text-7xl'>Hear Music All Around</h2>
          <div className="flex justify-between">
            <div className='pt-8'>
              {/* <Ribeye /> */}
              <MdOutlineSpatialAudio size={25} className='text-[#f6f6f6]/60 my-1'/>
              <p className='text-left'>EXPERIENCE <br/> SPATIAL STUDIO</p>
            </div>
            <button className='my-1.5 bg-purple-800 h-fit rounded-3xl py-2 px-3 text-sm shadow-sm'>Book for a session*</button>
          </div>

          <div className="bg-white shadow rounded-lg flex mt-3 justify-between items-center py-4 pl-4 h-[150px] -mb-14">
            <div className='text-black/60 text-left'>
              <p className='text-sm font-semibold'>New Release</p>
              <p className='font-bold text-2xl text-black/85'>Lungu boy ft korede bello</p>
              <div className="flex justify-between items-center">
              <h3 className='text-4xl t'>2024</h3>
              <button className="rounded-full size-7 bg-black mt-2.5 grid place-items-center">
                <RxArrowTopRight className='text-white' size={18}/>
              </button>
              </div>
            </div>

            <div className='overflow-hidden'>
              {/* <img src='../assets/images/asake.jpg' className='size-20' alt='' /> */}
              <Image src={image.Asake4} width={1000} height={1000} alt='asake' className='object-cover size-44 rounded-xl shadow border ' />
            </div>
          </div>
        </div>
        <div className=''>
          <div className=' rounded-3xl h-[80vh] w-4/5 shadow bg-album-cover relative'>
            <span className='absolute top-4 right-4 px-2 flex items-center gap-1.5 py-1 text-xs bg-black/40 rounded-3xl border border-white/40'>
              TRENDING <MdLocalFireDepartment size={17} />
            </span>
            <div className='h-1/8 absolute bottom-0 bg-black/30 glass w-full py-6 rounded-b-2xl px-7 flex items-center justify-between'>
              <div>
                <h2 className='text-xl capitalize'>
                  Lonely at the Top
                </h2>
                <p className='text-sm text-white/70'>
                  Work of art
                </p>
              </div>

              <div className='flex gap-3 items-center'>
                <button className='rounded-full p-2 text-white bg-purple-400  '><IoPlay size={18} /></button>
                <IoPlaySkipForward size={20} className='text-white' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero