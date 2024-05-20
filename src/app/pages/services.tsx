"use client"; 
import React from "react";
import "./services.css";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


export default function OurServices() {
 


  return (
    <main className="z-100">
      <div className="sm:bg-yellow-600">
        <div className="sm:mx-[50rem] sm:inline-block " >
          <h1 className="text-red-500 font-bold text-[20px] flex justify-center   sm:text-[2rem]">
            OUR SERVICES
          </h1>
          <h3 className="flex justify-center pt-[1rem] text-[1.5rem] font-bold  sm:text-green-300  sm:pl-[20rem]">
            We Are Specialized In The Following Services
          </h3>
        </div>
        <div>
          <ul className="flex gap-[3rem] mx-[10rem] pt-[5rem] sm:block ">
            <li className="bg-red-500 px-[3rem] py-[4rem] justify-center font-medium text-white text-center h-[10rem] w-[11rem]  hover:bg-red-500 hover:text-white shadow-md">
              Business Website
            </li>
            <li className="px-[3rem] py-[3rem] justify-center font-medium text-black text-center w-[11rem] h-[10rem]  hover:bg-red-500 hover:text-white  shadow-md hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  ">
              e-Commerce Website
            </li>
            <li className=" px-[3rem] py-[3rem] justify-center font-medium  text-black  text-center w-[11rem] h-[10rem]  hover:bg-red-500 hover:text-white shadow-md  hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
              SEO
            </li>
            <li className=" px-[3rem] py-[3rem] justify-center font-medium  text-black  text-center w-[11rem] h-[10rem]  hover:bg-red-500 hover:text-white shadow-md  hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
              Digital Marketing
            </li>
            <li className=" px-[3rem] py-[3rem] justify-center font-medium  text-black  text-center w-[11rem] h-[10rem] hover:bg-red-500 hover:text-white shadow-md  hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
              Branding
            </li>
          </ul>
        </div>
        <div>
          <h6 className="mx-[10rem] pt-[1.5rem] text-[12px] font-semibold text-red-500">
            Business Website
          </h6>
          <div className="mx-[10rem] pt-[2rem]">
            <h2 className="font-bold text-[30px] pt-[2rem]">
              Business Website
            </h2>
            <p className="text-[12px] pt-[1rem]">
              If your business does not yet have a website, then this is time to
              have an online <br />
              presence that communicates the brand of your company, as well as
              that
              <br />
              displays information about services or products
            </p>
            <div>
              <img
                className="mx-[30rem] my-[-12rem] w-[40rem] h-[27rem] pl-[6rem]"
                src={
                  "./team-writes-programming-code-for-app-or-website-6765188-5607773.webp"
                }
                alt="our group image description"
              />
            </div>
            <div>
              <ul>
                <li className="p-4 font-semibold text-[14px]">
                  Interactive Features
                </li>
                <li className="p-4 font-semibold text-[14px]">
                  {" "}
                  UI & UX Implementation
                </li>
                <li className="p-4 font-semibold text-[14px]">
                  Mobile Optimized
                </li>
              </ul>
              <ul className="mx-[15rem] my-[-10rem]">
                <li className="p-4 font-semibold text-[14px]">User friendly</li>
                <li className="p-4 font-semibold text-[14px]">
                  {" "}
                  100% SEO optimized
                </li>
                <li className="p-4 font-semibold text-[14px]">
                  Speed performance
                </li>
              </ul>
            </div>
            <button className="my-[13rem] bg-red-500 text-white p-[1rem] rounded-sm"> Get Proposal</button>

          </div>
        </div>
      
    
      </div>
      
          
     

      
    </main>
  );
}
