'use client';
import React from 'react'
import SectionTitle from '../Widgets/SectionTitle';
import Image from 'next/image';
import * as image from '../assets/images';


const Services = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const servicesArray = [
        {
          img: 'talent-management.jpg',
          title: 'Talent Management',
          content: 'Our talent management approach is focused on the growth and development of artists from the ground up. We provide personalized career guidance, strategic planning, and professional development support to help artists navigate the entertainment industry successfully. Our team works tirelessly to identify opportunities, negotiate deals, and create sustainable career paths that align with each artists unique vision and goals.'
        },
        {
          img: 'music-production.jpg',
          title: 'Music Production',
          content: 'Working with experienced producers and sound engineers, we offer professional production support - from songwriting and recording to mixing and mastering. We focus on delivering high-quality, commercially viable music that maintains artistic integrity while appealing to target audiences.'
        },
        {
          img: 'music-distribution.jpg',
          title: 'Music Distribution',
          content: 'Our music distribution network ensures your music reaches all major streaming platforms, digital stores, and relevant markets worldwide. We handle everything from release planning to royalty management, making your music accessible to listeners across the globe while maintaining full transparency in revenue tracking.'
        },
        {
          img: 'marketing.jpg',
          title: 'Marketing',
          content: 'We employ a mix of traditional and digital marketing techniques, including social media management, content creation, campaign planning, and audience targeting. Our marketing geniuses work to create engaging campaigns that connect artists with their target audience and drive measurable results.'
        },
        {
          img: 'artist-branding.jpg',
          title: 'Artist Branding',
          content: 'Our branding services encompass visual identity development, social media presence, content strategy, and brand positioning. By developing distinctive and authentic brand identities, we ensure each artist\'s brand aligns with their musical style, personal values, and career objectives, creating a consistent and memorable presence across all platforms.'
        },
        {
          img: 'public-relations.jpg',
          title: 'PR (Public Relations)',
          content: 'Our PR strategies are designed to build and maintain a strong public image for our artists, securing meaningful media coverage, interviews, and features. Through strategic communication and networking, we ensure our artists maintain a strong presence in both traditional and digital media landscapes, enhancing their visibility and industry standing.'
        }
      ];
  return (
    <div className='section py-16' id='services'>
      <SectionTitle title='Our Services' otherStyles={'my-4'} />

      <div className='flex gap-4 overflow-x-scroll w-full'>
 
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          servicesArray?.map((item: any, i : number) => {
            return (
              <div key={i} className='border min-w-[80%] md:min-w-[30%] rounded-2xl'>
                <Image src={image?.Asake3} width={1000} height={1000} alt='' className='max-h-[200px] object-cover rounded-2xl' />
                <div className='px-2 py-2'>
                  <p className='text-lg font-semibold text-black/80'>
                    {item?.title}
                  </p>

                  <p className='text-sm text-balance text-black/60'>
                    {item?.content}
                  </p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Services