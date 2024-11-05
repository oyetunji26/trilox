'use client'
import React from 'react'
import Image from 'next/image'
import * as images from '../assets/images'
import SectionTitle from '../Widgets/SectionTitle'

const WhoWeAre = () => {
  return (
    <div className='section'>
        <div className="grid grid-cols-2 gap-3 items-center">
            <div className='pt-3'>
                {/* <p className='text-3xl my-3 text-center'>Who We are</p> */}
                <SectionTitle title='Who we are' otherStyles={'my-2'} />
                <p className='text-gray-700 leading-loose'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est esse atque beatae ratione quia at tenetur aspernatur magnam numquam, error nam sed alias non repudiandae illo odit quo cupiditate. Illum.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas illum provident illo molestiae molestias quo, ipsum, nam consequatur ex veniam, praesentium dignissimos dicta eius distinctio voluptates fuga asperiores nemo voluptatibus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eum et, tempore ipsam inventore facere voluptate deserunt repellendus fuga ad. Tempore ipsa similique repellat doloribus. Quod soluta saepe dolorem molestiae?
                </p>
            </div>
            <div>
                <Image src={images?.Asake3} alt='' className='rounded-3xl h-[70vh] object-contain'  />
            </div>
        </div>
    </div>
  )
}

export default WhoWeAre