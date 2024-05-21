"use client"; 
import React from "react";
import "./services.css";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
const Userfaqs = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <div className="mt-[1rem]">
          
          <div className="">
                <h1 className="text-center text-red-500 ">Frequently asked questions</h1>
                <h2 className="text-black text-center font-bold text-[30px]" > FAQ</h2>
              <div
            className={`mx-[10rem] shadow-md my-[5rem] ${
              isExpanded ? "h-[100px]" : "h-[50px]"
            }`}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-[16px] font-bold text-red-500 pl-20">
                Why did you choose design
              </h4>
              <button
                onClick={toggleExpand}
                className="text-[16px] font-bold text-red-500 pr-20"
              >
                {isExpanded ? "x" : "+"}
              </button>
            </div>
            {isExpanded && (
              <p className="text-center text-[14px] pt-5">
                we are an automated agency driven for working with you and
                providing you with the best products
              </p>
            )}
          </div>
          <div
            className={`mx-[10rem] shadow-md my-[5rem] ${
              isExpanded ? "h-[100px]" : "h-[50px]"
            }`}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-[16px] font-bold text-red-500 pl-20">
                Why did you choose design
              </h4>
              <button
                onClick={toggleExpand}
                className="text-[16px] font-bold text-red-500 pr-20"
              >
                {isExpanded ? "x" : "+"}
              </button>
            </div>
            {isExpanded && (
              <p className="text-center text-[14px] pt-5">
                we are an automated agency driven for working with you and
                providing you with the best products
              </p>
            )}
          </div>
          <div
            className={`mx-[10rem] shadow-md my-[5rem] ${
              isExpanded ? "h-[100px]" : "h-[50px]"
            }`}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-[16px] font-bold text-red-500 pl-20">
                Why did you choose design
              </h4>
              <button
                onClick={toggleExpand}
                className="text-[16px] font-bold text-red-500 pr-20"
              >
                {isExpanded ? "x" : "+"}
              </button>
            </div>
            {isExpanded && (
              <p className="text-center text-[14px] pt-5">
                we are an automated agency driven for working with you and
                providing you with the best products
              </p>
            )}
          </div>
          <div
            className={`mx-[10rem] shadow-md my-[5rem] ${
              isExpanded ? "h-[100px]" : "h-[50px]"
            }`}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-[16px] font-bold text-red-500 pl-20">
                Why did you choose design
              </h4>
              <button
                onClick={toggleExpand}
                className="text-[16px] font-bold text-red-500 pr-20"
              >
                {isExpanded ? "x" : "+"}
              </button>
            </div>
            {isExpanded && (
              <p className="text-center text-[14px] pt-5">
                we are an automated agency driven for working with you and
                providing you with the best products
              </p>
            )}
          </div>
          </div>


    </div>
  )
}

export default Userfaqs