import React from 'react';
import * as image from '../assets/images';
import TeamMates from '../Widgets/TeamMates';
import SectionTitle from '../Widgets/SectionTitle';

const Team = () => {
  return (
    <div className='section' id='team'>
      <SectionTitle title='Meet our Team' otherStyles={'md:my-16 my-8'} />
        <div className="grid md:grid-cols-3 gap-6">
            <TeamMates img={image?.Asake} name='Olamilekan' title='founder' xProfile={'x.com/oyetunji26'} IgProfile={'instagram.com/oyetunji6'}/>
            <TeamMates img={image?.Asake2} name='Olamilekan' title='founder' xProfile={'x.com/oyetunji26'} IgProfile={'instagram.com/oyetunji6'}/>
            <TeamMates img={image?.Asake3} name='Olamilekan' title='founder' xProfile={'x.com/oyetunji26'} IgProfile={'instagram.com/oyetunji6'}/>
            <TeamMates img={image?.Asake4} name='Olamilekan' title='founder' xProfile={'x.com/oyetunji26'} IgProfile={'instagram.com/oyetunji6'}/>
            <TeamMates img={image?.Asake5} name='Olamilekan' title='founder' xProfile={'x.com/oyetunji26'} IgProfile={'instagram.com/oyetunji6'}/>
            <TeamMates img={image?.Asake} name='Olamilekan' title='founder' xProfile={'x.com/oyetunji26'} IgProfile={'instagram.com/oyetunji6'}/>
        </div>
    </div>
  )
}

export default Team