"use client"; 
import React from "react";
import "./services.css";
import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
const Usercustomers = () => {
  return (
    <div>
          <div className="-my-[50rem]">
                <h2 className="text-center my-[60rem] font-medium text-red-400 text-10 ">Testominial</h2>
                <h3 className="text-center text-[27px] font-semibold -my-[57rem]"> See what our clients say about us! </h3>
                <ul className="flex my-[60rem] mx-[10rem] gap-10" >
                <div className="h-[25rem] w-[20rem] bg-white shadow-2xl text-center ">

                  <Image 
                  className="w-20 h-20 rounded-[50%] mx-[35%] my-16"
                  src='/785a1b9c359640da6bc9cfe3670b42ba.jpg'
                  alt=""
                  width={500}
                  height={500}
                  />

                  <p className="text-[13px] px-4">
                    Excellent in their work and happy and motivated to work with them and also they offer the best services that i have ever seen in <br/> all of the 
                    companies that i have worked with different things
                  </p>
                  <p className="text-left text-red-600 text-[13px] px-6 pt-8">David Ikene</p>
                  <p className="text-left text-[10px] px-6 pt-1">Master card foundation</p>

                </div>
                 <div className="h-[25rem] w-[20rem] bg-white shadow-2xl text-center ">

                 <Image 
                  className="w-20 h-20 rounded-[50%] mx-[35%] my-16"
                  src='/785a1b9c359640da6bc9cfe3670b42ba.jpg'
                  alt=""
                  width={500}
                  height={500}
                  />
                  <p className="text-[13px] px-4">
                    Excellent in their work and happy and motivated to work with them and also they offer the best services that i have ever seen in <br/> all of the 
                    companies that i have worked with different things
                  </p>
                  <p className="text-left text-red-600 text-[13px] px-6 pt-8">David Ikene</p>
                  <p className="text-left text-[10px] px-6 pt-1">Master card foundation</p>

                </div>
               <div className="h-[25rem] w-[20rem] bg-white shadow-2xl text-center ">

               <Image 
                  className="w-20 h-20 rounded-[50%] mx-[35%] my-16"
                  src='/785a1b9c359640da6bc9cfe3670b42ba.jpg'
                  alt=""
                  width={500}
                  height={500}
                  />
                  <p className="text-[13px] px-4">
                    Excellent in their work and happy and motivated to work with them and also they offer the best services that i have ever seen in <br/> all of the 
                    companies that i have worked with different things
                  </p>
                  <p className="text-left text-red-600 text-[13px] px-6 pt-8">David Ikene</p>
                  <p className="text-left text-[10px] px-6 pt-1">Master card foundation</p>

                </div>


                </ul>

              </div>

    </div>
  )
}

export default Usercustomers