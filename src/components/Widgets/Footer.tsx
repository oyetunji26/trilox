import React from 'react'
import { RiInstagramLine, RiLinkedinLine, RiTwitterLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className=''>
      <div className='grid md:grid-cols-2 gap-3 py-4 pt-10 section place-items-center bg-black/60 min-h-[200px]'>
        <div className='text-2xl'>
          <p className='w-4/6 text-white/90'>Sign Up To Never Miss Your Favorite Show live</p>
        </div>
        <div className='max-w-full'>
          <div className='bg-white flex shadow border'>
            <input type='email' className=' px-3 outline-0'  placeholder='your Email Address' />
            <button className='px-4 py-3 bg-black text-white'>Suscribe</button>
          </div>
        </div>
      </div>

      <div className='section py-10 h-[40vh] grid place-items-center bg-white/70'>


        <div className='grid md:grid-cols-[3fr__1.2fr__1.2fr__1.2fr] gap-3'>
          <div className='flex flex-col gap-3 md:pl-3'>
            <h2 className='text-3xl font-semibold'>Trilox Music</h2>
            <p className='text-black/60'>Trilox Music is ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-medium'>Quick Links</h2>

            <ul className='flex flex-col gap-1.5 text-black/60'>
              <li>Home</li>
              <li>About Us</li>
              <li>Albums</li>
              <li>Tour</li>
            </ul>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-medium'>Contact details</h2>

            <ul className='flex flex-col gap-1.5 text-black/60'>
              <li>3 London Uk</li>
              <li>support@trilox.com</li>
              <li>(+234 80 64500750)</li>
            </ul>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-medium'>Official Social Media</h2>

            <ul className='flex gap-2 text-black/60'>
              <li className=''>
                <RiInstagramLine className='' size={26} />
              </li>
              <li className=''>
                <RiTwitterLine size={26} />
              </li>
              <li className=''>
                <RiLinkedinLine size={26} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer