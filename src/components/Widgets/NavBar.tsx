'use client';
import React, {useState, useEffect} from 'react'
import Link from 'next/link';

const NavBar = () => {
  const [active,setActive] = useState<number>(0);

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
    <div className='navbar' >
        <div className='text-xl'>
            TriloxMusix
        </div>
        <ul className='flex gap-3 md:gap-5'>
            {/* <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Download</li>
            <li>Support</li> */}
            {
              navProps?.map((items: any, i: number) => (
                <Link key={i} href={items?.ref} className={` ${active == i ? 'text-white' : 'text-white/60'}`} onClick={() => setActive(i)}>
                  {items?.title}
                </Link>
              ))
            }
        </ul>
    </div>
  )
}

export default NavBar