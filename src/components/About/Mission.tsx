import React from 'react'
import SectionTitle from '../Widgets/SectionTitle'
import Image from 'next/image'
import * as images from '../assets/images'

const Mission = () => {
  return (
    <div className='section py-16' id='mission'>
        <div className="grid grid-cols-2 gap-5 flex-col-reverse items-center">

                <Image src={images?.Asake5} alt='' className='object-contain h-[70vh] rounded-2xl'  />
          
            <div className='pt-3'>
                {/* <p className='text-3xl my-3 text-center'>Who We are</p> */}
                <SectionTitle title='Our Mission' otherStyles={'my-2'} />
                <p className='text-gray-700 leading-loose'>
                  We aim to reshape the music industry by empowering, developing, and promoting independent artists and with the right support systems. We strive to showcase Nigerian and African entertainment culture, beliefs, and heritage to the global stage, therefore bridging the gap between African music and international audiences to create a sustainable career paths for our talents globally.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Mission