"use client"; 
import React from "react";
import "./services.css";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
function WhyPage(){
    const skills=[
        "WebDesign",
        "DigitalMarketing",
        "Branding",
        "SEO"
    
      ]
    return(
      <>
        <div className="mx-[10rem] my-[-5rem] w-auto h-auto ">
        <h1 className="text-red-500 mx-[1rem] font-medium text-[20px]  ">Why</h1>
        <h2 className="text-red-500  font-semibold text-[35px] pb-[5px]">Why choose Us</h2>
        <p className="text-[14px] ">All of our services are focused especially for companies that are looking<br/>
        to develop a strong online presence and also make their businesses<br/>
        stand out online. Also all in one is our philosphy to make the lives of<br/>
        business owners simpler, it is for this reason that we offer a wide variety<br/>
        of services that complement each other such as the creation of<br/>
        Branding, Web Design, Digital Marketing and SEO 
        </p>
        </div>
        <div className="mx-[10rem] my-[10rem]">
        {skills.map((item, index) => (
          <ul key={index}>
            <li className="font-bold text-[15px] pb-[4rem]">{item}</li>
          </ul>
        ))}
        <ul className=" block justify-start items-start my-[-21rem]">
          <li className="w-[30rem] h-[30px] bg-red-600 rounded-2xl text-white text-[13px] text-center my-[2rem]">100</li>
          <li className="w-[30rem] h-[30px] bg-red-600 rounded-2xl text-white text-[13px] text-center  my-[3rem]">100</li>
          <li className="w-[30rem] h-[30px] bg-red-600 rounded-2xl text-white text-[13px] text-center  my-[3.5rem]">100</li>
          <li className="w-[30rem] h-[30px] bg-red-600 rounded-2xl text-white text-[13px] text-center  my-[2rem]">100</li>

        </ul>
      </div>
      </>
    )
}