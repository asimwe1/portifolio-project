import Image from "next/image";
import image1 from "../../../public/astronaut.jpeg";

export default function Landon() {
  return (
    <div className="m-10 md:flex gap-5 md:mx-36 ">
      <div className="my-10">
        <p>Marcelo x design</p>
        <h1 className="text-redBrick-100 text-3xl font-bold my-5 md:text-4xl">
          We're Creative Digital Agency
        </h1>
        <p className="text-gray-500">
          We have your digital solution on web design, mobile app development,
          SEO, branding & digital marketing
        </p>
        <div className="my-5">
          <button className="bg-redBrick-100 text-white px-4 py-2 rounded hover:bg-red-800 duration-500 mr-3">
            Get a proposal
          </button>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 duration-500">
            Portifolio
          </button>
        </div>
      </div>

      <div className="m-4">
        {/* Replace with our own image */}
        <Image src={image1} alt="Astronaut" />
      </div>
    </div>
  );
}
