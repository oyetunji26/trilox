/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, {useState, useEffect} from 'react'
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import Link from 'next/link';

const NavBar = () => {
  const [active,setActive] = useState<number>(0);
  const [navToggle, setNavToggle] = useState<boolean>(false);

  const navProps = [
    {
      title: "Home", ref: ""
    },
    {
      title: "About Us", ref: "#about"
    },
    {
      title: "Our Mission", ref: "#mission"
    },
    {
      title: "Team", ref: "#team"
    },
    {
      title: "Contact", ref: "#contact"
    },
  ]
    // onScroll navbar becomes fixed and given a glassMorphism styling
    useEffect(() => {
      const handleScroll = () => {
        // Your onScroll logic here
        // Example: Add a class to the navbar when scrolling down
        const navbar = document.querySelector(".navbar");
        if (navbar && window.scrollY > 0) {
          navbar?.classList.add("scrolled");
        } else {
          navbar?.classList.remove("scrolled");
        }
      };
  
      window.addEventListener("scroll", handleScroll);

      // Cleanup the event listener on component unmount
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div className='navbar items-center' >
        <div className='text-xl font-semibold'>
            TriloxMusix
        </div>
        <ul className='flex gap-3 md:gap-5 max-md:hidden'>
            {
              navProps?.map((items: any, i: number) => (
                <Link key={i} href={items?.ref} className={` ${active == i ? 'text-white' : 'text-white/60'}`} onClick={() => setActive(i)}>
                  {items?.title}
                </Link>
              ))
            }
        </ul>
        <div className='md:hidden'>
          <button onClick={() => setNavToggle(!navToggle)}>
            {navToggle ? <RiCloseFill size={23}/> : <RiMenu3Fill size={23} />}
          </button>
          <ul className={`flex-row gap-y-3 md:gap-5 absolute right-5 shadow bg-white mt-7 rounded-2xl z-[999999] p-3 ${navToggle ? '' : 'hidden'}`}>
            {
              navProps?.map((items: any, i: number) => (
                <li key={i}>
                  <Link href={items?.ref} className={` ${active == i ? 'text-black' : 'text-black/60'}`} onClick={() => setActive(i)}>
                    {items?.title}
                  </Link>
                </li>
              ))
            }
        </ul>
        </div>
        
    </div>
  )
}

export default NavBar