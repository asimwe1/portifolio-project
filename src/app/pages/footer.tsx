import React from 'react'
import "./footer.css"

const Userfooter = () => {
  return (
    <div className=''>
        <div className='bg-black w-full h-[25rem]'>
            <ul className='flex gap-[20rem] text-white font-medium mx-[5rem] text-[12px] pt-8'>
                <li>About us</li>
                <li>Contact us</li>
                <li>Hours of Operation</li>
                <li className='-ml-10'>Policy</li>
            </ul>
          <div className=' text-white  mx-[5rem] text-[8px] pt-10 font-medium'>
            <ul className='flex gap-8'>
                <li>
                <p>We are creative agency that offers digital solutions to business that want to<br/> impact
                to the digital age,build awareness of their business  and their products<br/> and increase the 
                income and profits of the business, we are specialised in web<br/> design ,mobile development,seo,
                digital marketing and branding
            </p>
                </li>
                <li className='mx-10'>
                    <ol>
                        <li>+250 788888888</li>
                        <li>techer@gmail.com</li>
                        <li>Kigali ,rwanda</li>
                    </ol>
                </li>
                <li className='mx-60'>
                    <ol>
                        <li>Monday</li>
                        <li>8:00-9:00</li>
                        <li>Monday</li>
                        <li>8:00-9:00</li>
                    </ol>
                </li>
                <li className='mx-[4.5rem] '>
                    <ol>
                        <li>Terms and conditions</li>
                        <li>Policy</li>
                    </ol>
                </li>
            </ul>
            <ul className='flex gap-60 pt-11'>
                <li className='font-medium text-[11px]'>Web  & App Development
                <ol className='text-[8px] pt-6'>
                    <li>Mobile app development</li>
                    <li>Business website</li>
                    <li> E-commerce website</li>
                    <li>Online commerce</li>
                    <li>Web mantianance</li>
                </ol>
                </li>
                <li className='font-medium text-[11px]'>Seo Services
                <ol className='text-[8px] pt-6'>
                    <li>Mobile app development</li>
                    <li>Business website</li>
                    <li> E-commerce website</li>
                    <li>Online commerce</li>
                    <li>Web mantianance</li>
                </ol>
                </li>
                <li className='font-medium mx-12 text-[11px]'>Digital Advertising 
                <ol className='text-[8px] pt-6'>
                    <li>Mobile app development</li>
                    <li>Business website</li>
                    <li> E-commerce website</li>
                    <li>Online commerce</li>
                    <li>Web mantianance</li>
                </ol>
                </li>
                <li className='font-medium text-[11px]'>Other Links
                <ol className='text-[8px] pt-6'>
                    <li>Mobile app development</li>
                    <li>Business website</li>
                    <li> E-commerce website</li>
                    <li>Online commerce</li>
                    <li>Web mantianance</li>
                </ol>
                </li>
            </ul>
           
          </div>
        </div>
    </div>
  )
}

export default Userfooter