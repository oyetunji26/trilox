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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est esse atque beatae ratione quia at tenetur aspernatur magnam numquam, error nam sed alias non repudiandae illo odit quo cupiditate. Illum.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas illum provident illo molestiae molestias quo, ipsum, nam consequatur ex veniam, praesentium dignissimos dicta eius distinctio voluptates fuga asperiores nemo voluptatibus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eum et, tempore ipsam inventore facere voluptate deserunt repellendus fuga ad. Tempore ipsa similique repellat doloribus. Quod soluta saepe dolorem molestiae?
                </p>
            </div>
        </div>
    </div>
  )
}

export default Mission