"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";

export default function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const navLinks = [
    { name: "HOME", linkto: "/" },
    { name: "ABOUT US", linkto: "/about" },
    { name: "PORTIFOLIO", linkto: "/portifolio" },
    { name: "SERVICES", linkto: "" },
    { name: "BLOG", linkto: "/blog" },
    { name: "CONTACT US", linkto: "/contact" },
  ];

  // function to toggle menu visibility
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="md:flex md:items-center">
      {/* The mobile links */}

      <div className="flex justify-between m-3 text-redBrick-100 text-2xl">
        <h2 className=" font-bold  ">Logo</h2>
        <TiThMenu className="md:hidden" onClick={handleClick} />
      </div>

      <nav className="">
        <div
          className={` ${
            isVisible ? "flex" : "hidden"
          } md:hidden flex-col items-center justify-center w-full h-[90vh]`}
        >
          {navLinks.map((link, i) => (
            <div className="my-2" key={i}>
              <Link
                className={clsx(
                  "text-[14px] hover:text-redBrick-100 duration-300",
                  {
                    "text-redBrick-100": pathname === link.linkto,
                  }
                )}
                href={link.linkto}
              >
                {link.name}
              </Link>
            </div>
          ))}
          <Link
            href={""}
            className="text-[14px] text-white bg-redBrick-100 px-4 py-2 rounded-[20px]"
          >
            GET QUOTE
          </Link>
        </div>
      </nav>

      {/* The desktop links */}

      <nav className="hidden md:flex items-center justify-center gap-5 my-6 font-semibold w-full">
        {navLinks.map((link, i) => (
          <div className="my-2" key={i}>
            <Link
              className={clsx(
                "text-[14px] hover:text-redBrick-100 duration-300",
                {
                  "text-redBrick-100": pathname === link.linkto,
                }
              )}
              href={link.linkto}
            >
              {link.name}
            </Link>
          </div>
        ))}
        <Link
          href={""}
          className="text-[14px] text-white bg-redBrick-100 px-4 py-2 rounded-[20px]"
        >
          GET QUOTE
        </Link>
      </nav>
    </div>
  );
}
