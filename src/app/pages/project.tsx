"use client";
import Image from "next/image";
import React from "react";
import "./services.css";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
export default function ProjectPage() {
  return (
    <>
      <div className="-my-[65rem]">
        <div className="mx-[30rem] my-[60rem]">
          <h1 className="text-center text-red-500 font-bold text-[30px]">Projects</h1>
          <ul className="flex text-center justify-center gap-[30px] my-10">
            <button className="bg-black text-white w-[80px] h-[40px] border-none text-[10px] rounded-md">All</button>
            <button className="bg-black text-white w-[120px] h-[40px] border-none text-[10px] rounded-md">Apps</button>
            <button className="bg-black text-white w-[120px] h-[40px] border-none text-[10px] rounded-md">Website</button>
          </ul>


        </div>
        <div className="flex gap-8 mx-[10rem] -my-[55rem] list-none">
          <ul className="flex gap-[7rem]">
            <li className="bg-white w-[20rem] h-[20rem] rounded-md shadow-2xl text-center relative overflow-hidden group">
              <div className="transition-opacity duration-500 group-hover:opacity-0">
                <Image
                  className="w-56 h-56 mx-auto"
                  src='/785a1b9c359640da6bc9cfe3670b42ba.jpg'
                  alt='project1'
                  width={250}
                  height={250}
                />
                <p className="font-bold text-[18px]">Online e-commerce</p>
                <p className="text-[10px] justify-left my-1">
                  this is an online e-commerce that we made through<br /> different skills like react js and tailwind and node js
                </p>
                <Link href="" className="text-[14px] my-2 text-red-600">
                  Dribble e-commerce
                </Link>
                <FontAwesomeIcon icon={faLink} className="w-4 h-4 text-red-500  pl-[8px] -my-1" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-red-400 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <p className="text-white text-md font-bold">Visit the website</p>
              </div>
            </li>
            <li className="bg-white w-[20rem] h-[20rem] rounded-md shadow-2xl text-center relative overflow-hidden group">
              <div className="transition-opacity duration-500 group-hover:opacity-0">
                <Image
                  className="w-56 h-56 mx-auto"
                  src='/785a1b9c359640da6bc9cfe3670b42ba.jpg'
                  alt='project1'
                  width={250}
                  height={250}
                />
                <p className="font-bold text-[18px]">Online e-commerce</p>
                <p className="text-[10px] justify-left my-1">
                  this is an online e-commerce that we made through<br /> different skills like react js and tailwind and node js
                </p>
                <Link href="" className="text-[14px] my-2 text-red-600">
                  Dribble e-commerce
                </Link>
                <FontAwesomeIcon icon={faLink} className="w-4 h-4 text-red-500  pl-[8px] -my-1" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-red-400 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <p className="text-white text-md font-bold">Visit the website</p>
              </div>
            </li>
            <li className="bg-white w-[20rem] h-[20rem] rounded-md shadow-2xl text-center relative overflow-hidden group">
              <div className="transition-opacity duration-500 group-hover:opacity-0">
                <Image
                  className="w-56 h-56 mx-auto"
                  src='/785a1b9c359640da6bc9cfe3670b42ba.jpg'
                  alt='project1'
                  width={250}
                  height={250}
                />
                <p className="font-bold text-[18px]">Online e-commerce</p>
                <p className="text-[10px] justify-left my-1">
                  this is an online e-commerce that we made through<br /> different skills like react js and tailwind and node js
                </p>
                <Link href="" className="text-[14px] my-2 text-red-600">
                  Dribble e-commerce
                </Link>
                <FontAwesomeIcon icon={faLink} className="w-4 h-4 text-red-500  pl-[8px] -my-1" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-red-400 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <p className="text-white text-md font-bold">Visit the website</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex gap-[7rem] mx-[10rem] my-[60rem] list-none">
        <li className="bg-white w-[20rem] h-[20rem] rounded-md shadow-2xl text-center relative overflow-hidden group">
              <div className="transition-opacity duration-500 group-hover:opacity-0">
                <Image
                  className="w-56 h-56 mx-auto"
                  src='/785a1b9c359640da6bc9cfe3670b42ba.jpg'
                  alt='project1'
                  width={250}
                  height={250}
                />
                <p className="font-bold text-[18px]">Online e-commerce</p>
                <p className="text-[10px] justify-left my-1">
                  this is an online e-commerce that we made through<br /> different skills like react js and tailwind and node js
                </p>
                <Link href="" className="text-[14px] my-2 text-red-600">
                  Dribble e-commerce
                </Link>
                <FontAwesomeIcon icon={faLink} className="w-4 h-4 text-red-500  pl-[8px] -my-1" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-red-400 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <p className="text-white text-md font-bold">Visit the website</p>
              </div>
            </li>
            <li className="bg-white w-[20rem] h-[20rem] rounded-md shadow-2xl text-center relative overflow-hidden group">
              <div className="transition-opacity duration-500 group-hover:opacity-0">
                <Image
                  className="w-56 h-56 mx-auto"
                  src='/785a1b9c359640da6bc9cfe3670b42ba.jpg'
                  alt='project1'
                  width={250}
                  height={250}
                />
                <p className="font-bold text-[18px]">Online e-commerce</p>
                <p className="text-[10px] justify-left my-1">
                  this is an online e-commerce that we made through<br /> different skills like react js and tailwind and node js
                </p>
                <Link href="" className="text-[14px] my-2 text-red-600">
                  Dribble e-commerce
                </Link>
                <FontAwesomeIcon icon={faLink} className="w-4 h-4 text-red-500  pl-[8px] -my-1" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-red-400 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <p className="text-white text-md font-bold">Visit the website</p>
              </div>
            </li>
            <li className="bg-white w-[20rem] h-[20rem] rounded-md shadow-2xl text-center relative overflow-hidden group">
              <div className="transition-opacity duration-500 group-hover:opacity-0">
                <Image
                  className="w-56 h-56 mx-auto"
                  src='/785a1b9c359640da6bc9cfe3670b42ba.jpg'
                  alt='project1'
                  width={250}
                  height={250}
                />
                <p className="font-bold text-[18px]">Online e-commerce</p>
                <p className="text-[10px] justify-left my-1">
                  this is an online e-commerce that we made through<br /> different skills like react js and tailwind and node js
                </p>
                <Link href="" className="text-[14px] my-2 text-red-600">
                  Dribble e-commerce
                </Link>
                <FontAwesomeIcon icon={faLink} className="w-4 h-4 text-red-500  pl-[8px] -my-1" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-red-400 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <p className="text-white text-md font-bold">Visit the website</p>
              </div>
            </li>

        </div>
        <div className="text-center -my-[55rem]    ">
          <button className="border-[1px] border-red-500 px-8 py-3 text-[12px] hover:bg-red-500 hover:text-white my-24">All Projects</button>
        </div>
      </div>
    </>

  )
}