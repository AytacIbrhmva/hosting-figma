import React from 'react';
import twitter from '../assets/icons/twitter.png';
import facebook from '../assets/icons/facebook.png';
import linkedin from '../assets/icons/linkedin.png';
import instagram from '../assets/icons/instagram.png';
import youtube from '../assets/icons/youtube.png';
import map from '../assets/icons/mapicon.png';
import email from '../assets/icons/mail.png';
import tel from '../assets/icons/tel.png';
import date from '../assets/icons/date.png';

export default function Footer() {
  return (
    <div>
        <div className='px-[40px] xl:px-[100px] py-[30px] xl:py-[120px] flex flex-col xl:flex-row gap-16 items-center xl:items-start justify-between'>
            {/* left */}
            <div>
                <h3 className='text-[40px] text-center xl:text-start text-white font-bold mb-5'>Host Beta</h3>
                <p className='text-xl text-lightGray text-center xl:text-start lg:w-[502px] font-medium mb-10'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nullam in nibh vehicula.</p>
                <div className='flex flex-wrap justify-center xl:justify-start gap-5'>
                    <a href='#' className='bg-white flex items-center justify-center w-[60px] h-[60px] rounded-full'>
                        <img src={twitter} className='w-[40px] h-[40px]' alt="" />
                    </a>
                    <a href='#' className='bg-white flex items-center justify-center w-[60px] h-[60px] rounded-full'>
                        <img src={facebook} className='w-[40px] h-[40px]' alt="" />
                    </a>
                    <a href='#' className='bg-white flex items-center justify-center w-[60px] h-[60px] rounded-full'>
                        <img src={linkedin} className='w-[40px] h-[40px]' alt="" />
                    </a>
                    <a href='#' className='bg-white flex items-center justify-center w-[60px] h-[60px] rounded-full'>
                        <img src={instagram} className='w-[40px] h-[40px]' alt="" />
                    </a>
                    <a href='#' className='bg-white flex items-center justify-center w-[60px] h-[60px] rounded-full'>
                        <img src={youtube} className='w-[40px] h-[40px]' alt="" />
                    </a>
                </div>
            </div>
            {/* left end */}

            {/* right */}
            <div className='flex flex-wrap sm:flex-nowrap gap-8'>
                {/* col */}
                <div>
                    <h1 className='text-white text-[32px] font-bold mb-5'>Get In Touch</h1>
                    <ul className='flex flex-col gap-[30px]'>
                        <li>
                            <a href="#" className='text-lightGray text-base font-medium flex items-center gap-3 hover:text-lightBlue transition duration-300'>
                                <img src={map} alt="" />
                                Richardson, California 62639
                            </a>
                        </li>
                        <li>
                            <a href="mailto: felicia.reid@example.com" className='text-lightGray text-base font-medium flex items-center gap-3 hover:text-lightBlue transition duration-300'>
                                <img src={email} alt="" />
                                felicia.reid@example.com
                            </a>
                        </li>
                        <li>
                            <a href="tel: +(405) 555-0128" className='text-lightGray text-base font-medium flex items-center gap-3 hover:text-lightBlue transition duration-300'>
                                <img src={tel} alt="" />
                                (405) 555-0128
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-lightGray text-base font-medium flex items-center gap-3 hover:text-lightBlue transition duration-300'>
                                <img src={date} alt="" />
                                December 19, 2022
                            </a>
                        </li>
                    </ul>
                </div>
                {/* col */}
                <div>
                    <h1 className='text-white text-[32px] font-bold mb-5'>Quicklinks</h1>
                    <ul className='flex flex-col gap-[30px]'>
                        <li>
                            <a href="#home" className='text-lightGray text-base font-medium flex items-center hover:text-lightBlue transition duration-300'>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className='text-lightGray text-base font-medium flex items-center hover:text-lightBlue transition duration-300'>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-lightGray text-base font-medium flex items-center hover:text-lightBlue transition duration-300'>
                                Team
                            </a>
                        </li>
                        <li>
                            <a href="#pricing" className='text-lightGray text-base font-medium flex items-center hover:text-lightBlue transition duration-300'>
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-lightGray text-base font-medium flex items-center hover:text-lightBlue transition duration-300'>
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>
                {/* col */}
                <div>
                    <h1 className='text-white text-[32px] font-bold mb-5'>Support</h1>
                    <ul className='flex flex-col gap-[30px]'>
                        <li>
                            <a href="#" className='text-lightGray text-base font-medium flex items-center hover:text-lightBlue transition duration-300'>
                                Help Center
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-lightGray text-base font-medium flex items-center hover:text-lightBlue transition duration-300'>
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-lightGray text-base font-medium flex items-center hover:text-lightBlue transition duration-300'>
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-lightGray text-base font-medium flex items-center hover:text-lightBlue transition duration-300'>
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-lightGray text-base font-medium flex items-center hover:text-lightBlue transition duration-300'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* right end */}
        </div>
    </div>
  )
}
