/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Image from "next/image";
import * as image from "../assets/images";
import { RxArrowTopRight } from "react-icons/rx";
import { MdOutlineSpatialAudio } from "react-icons/md";
import { MdLocalFireDepartment } from "react-icons/md";

import { TbMusicStar } from "react-icons/tb";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  const words = "Bringing the change music needs.";
  return (
    <div className="bg-black md:h-[70vh] text-white section overflow-y-visible max-md:py-10">
      <div className="grid md:grid-cols-2 items-center gap-4">
        <div className=" text-right -mt-10 leading-relaxed relative">
          {/* <FaFaceGrinStars size={45} className='absolute top-0 -left-7 text-white/60'/> */}
          {/* <TbMusicStar size={45} className='absolute top-0 left-7 text-white/60 text-purple-600'/> */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 10 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              reverse: true,
            }}
            className="absolute top-0 left-7"
          >
            <TbMusicStar size={45} className="text-white/60 text-purple-600" />
          </motion.div>

          {/* <h2 className='text-7xl text-white'> */}
          <TextGenerateEffect
            words={words}
            className="text-white text-4xl max-md:py-3"
          />

          {/* </h2> */}
          <div className="flex justify-between">
            <div className="pt-8">
              {/* <Ribeye /> */}
              <MdOutlineSpatialAudio
                size={25}
                className="text-[#f6f6f6]/60 my-1"
              />
              <p className="text-left">
                EXPERIENCE <br /> SPATIAL STUDIO
              </p>
            </div>
            {/* <button className="my-1.5 bg-purple-800 h-fit rounded-3xl py-2 px-3 text-sm shadow-sm">
              Book for a session*
            </button> */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.9,
                ease: "easeInOut",
                repeat: Infinity,
                reverse: true,
              }}
              className="bgpurple-800 grid place-items-center"
            >
              <TbMusicStar size={45} className=" text-purple-600" />
            </motion.div>
          </div>

          <div className="bg-white shadow rounded-lg flex mt-3 justify-between items-center py-4 pl-4 h-[150px] md:-mb-14">
            <div className="text-black/60 text-left">
              <p className="text-sm font-semibold">New Release</p>
              <p className="font-bold text-2xl text-black/85">
                Lungu boy ft korede bello
              </p>
              <div className="flex justify-between items-center">
                <h3 className="text-4xl t">2024</h3>
                <button className="rounded-full size-7 bg-black mt-2.5 grid place-items-center">
                  <RxArrowTopRight className="text-white" size={18} />
                </button>
              </div>
            </div>

            <div className="overflow-hidden">
              {/* <img src='../assets/images/asake.jpg' className='size-20' alt='' /> */}
              <Image
                src={image.Asake4}
                width={1000}
                height={1000}
                alt="asake"
                className="object-cover size-44 rounded-xl shadow border "
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className=" rounded-3xl h-[80vh]  shadow bg-albumcover relative mt-10">
            <Image
              src={image?.Asake2}
              width={1000}
              height={1000}
              alt=""
              className=" rounded-3xl w-full h-full object-cover"
            />
            <span className="absolute top-4 right-4 px-2 flex items-center gap-1.5 py-1 text-xs bg-black/40 rounded-3xl border border-white/40">
              TRENDING <MdLocalFireDepartment size={17} />
            </span>
            <div className="h-1/8 absolute bottom-0 bg-black/30 glass w-full py-6 rounded-b-2xl px-7 flex items-center justify-between">
              <div>
                <h2 className="text-xl capitalize">Money na water</h2>
                {/* <p className="text-sm text-white/70">Work of art</p> */}
                <p className="text-sm text-white/70">Mdiva new release</p>
              </div>

              <div className="flex gap-3 items-center">
                {/* <button className="rounded-full p-2 text-white bg-purple-400  ">
                      <IoPlay size={18} />
                    </button>
                    <IoPlaySkipForward size={20} className="text-white" /> */}
              </div>
            </div>
          </div>

          {/* <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            centerMode={false}
            className="items-start justify-start h-fit lg:w-4/5 mx-auto "
          >
            {[1, 1, 1, 1, 1, 1].map((i: number) => (
              <div
                key={i}
                className=" rounded-3xl h-[80vh]  shadow bg-albumcover relative mt-10"
              >
                <Image
                  src={image?.Asake2}
                  width={1000}
                  height={1000}
                  alt=""
                  className=" rounded-3xl w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 px-2 flex items-center gap-1.5 py-1 text-xs bg-black/40 rounded-3xl border border-white/40">
                  TRENDING <MdLocalFireDepartment size={17} />
                </span>
                <div className="h-1/8 absolute bottom-0 bg-black/30 glass w-full py-6 rounded-b-2xl px-7 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl capitalize">Money na water</h2>
                    <p className="text-sm text-white/70">Mdiva new release</p>
                  </div>

                  <div className="flex gap-3 items-center">
                  </div>
                </div>
              </div>
            ))}
          </Carousel>  */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
