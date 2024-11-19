'use client';
import React from 'react';
import * as image from '../assets/images';
import TeamMates from '../Widgets/TeamMates';
import SectionTitle from '../Widgets/SectionTitle';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


const Team = () => {
  return (
    <div className='section mb-10' id='team'>
      <SectionTitle title='Meet our Team' otherStyles={'md:my-16 my-8'} />
        <div className="grid md:grid-cols-3 gap-6 max-lg:hidden">
            <TeamMates img={image?.Asake} name='Olamilekan' title='founder' xProfile={'x.com/oyetunji26'} IgProfile={'instagram.com/oyetunji6'}/>
            <TeamMates img={image?.Asake2} name='Olamilekan' title='founder' xProfile={'x.com/oyetunji26'} IgProfile={'instagram.com/oyetunji6'}/>
            <TeamMates img={image?.Asake3} name='Olamilekan' title='founder' xProfile={'x.com/oyetunji26'} IgProfile={'instagram.com/oyetunji6'}/>
            <TeamMates img={image?.Asake4} name='Olamilekan' title='founder' xProfile={'x.com/oyetunji26'} IgProfile={'instagram.com/oyetunji6'}/>
            <TeamMates img={image?.Asake5} name='Olamilekan' title='founder' xProfile={'x.com/oyetunji26'} IgProfile={'instagram.com/oyetunji6'}/>
            <TeamMates img={image?.Asake} name='Olamilekan' title='founder' xProfile={'x.com/oyetunji26'} IgProfile={'instagram.com/oyetunji6'}/>
        </div>

        <div className='lg:hidden'>
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            centerMode={false}
            className="items-start justify-start h-[65vh] mx-auto "
          >
            <TeamMates img={image?.Asake} name='Olamilekan' title='founder' xProfile={'x.com/oyetunji26'} IgProfile={'instagram.com/oyetunji6'}/>
            <TeamMates img={image?.Asake2} name='Olamilekan' title='founder' xProfile={'x.com/oyetunji26'} IgProfile={'instagram.com/oyetunji6'}/>
            <TeamMates img={image?.Asake3} name='Olamilekan' title='founder' xProfile={'x.com/oyetunji26'} IgProfile={'instagram.com/oyetunji6'}/>
            <TeamMates img={image?.Asake4} name='Olamilekan' title='founder' xProfile={'x.com/oyetunji26'} IgProfile={'instagram.com/oyetunji6'}/>
            <TeamMates img={image?.Asake5} name='Olamilekan' title='founder' xProfile={'x.com/oyetunji26'} IgProfile={'instagram.com/oyetunji6'}/>
            <TeamMates img={image?.Asake} name='Olamilekan' title='founder' xProfile={'x.com/oyetunji26'} IgProfile={'instagram.com/oyetunji6'}/>
          </Carousel>
        </div>

    </div>
  )
}

export default Team