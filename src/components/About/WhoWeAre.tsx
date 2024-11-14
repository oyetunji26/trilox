'use client'
import React from 'react'
import Image from 'next/image'
import * as images from '../assets/images'
import SectionTitle from '../Widgets/SectionTitle'

const WhoWeAre = () => {
  return (
    <div className='section'>

        <SectionTitle title='Who we are' otherStyles={'my-2 md:hidden'} />
        <div className="flex max-md:flex-col-reverse gap-3 items-center">
            <div className='pt-3 md:w-1/2'>
              <SectionTitle title='Who we are' otherStyles={'my-2 max-md:hidden'} />
                <p className='text-gray-700 leading-loose'>
                  Trilox Music is a full-service music agency uniting talent management, production, distribution, marketing, and PR under one roof. We are a growth-driven brand and a passionate collective of entertainment industry experts, committed to meeting every promotional need of talents, performers, and executives in the entertainment industry. We develop raw talent into sustainable careers through our expertise in entertainment strategy, digital media, music promotion and in the industry as a whole.
                </p>
            </div>
            <div className='md:w-1/2'>
                <Image src={images?.Asake3} alt='' className='rounded-3xl h-[70vh] object-contain'  />
            </div>
        </div>
    </div>
  )
}

export default WhoWeAre