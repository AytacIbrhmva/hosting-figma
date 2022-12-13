import React, {useEffect, useState} from 'react';
import {IoMdMenu, IoMdClose} from 'react-icons/io';
import About from './About';
import Footer from './Footer';
import Home from './Home';
import Newsletter from './Newsletter';
import Pricing from './Pricing';
import Services from './Services';
import Testimonials from './Testmonial';
// import Testimonials from './Testimonials';


export default function Navbar() {

    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open);

  return (
    <>
    <nav className='w-full py-[30px] bg-darkBlue' >
        {/* container */}
        <div className="h-full w-full px-[40px] xl:px-[100px] flex items-center  justify-between">
            {/* logo */}
            <a href='' className='text-white font-bold text-xl '>Host Beta</a>
            <IoMdMenu onClick={toggle} className='text-white text-[50px] lg:hidden cursor-pointer rounded-full hover:bg-second p-2 transition duration-300' />
            {/* menu */}
            <div className="menu hidden lg:block">
                <ul className='flex items-center gap-10'>
                    <li>
                        <a href='#home' className="font-semibold text-xl text-white hover:text-lightBlue transition duration-300 ">Home</a>
                    </li>
                    <li>
                        <a href='#about' className="font-semibold text-xl text-white hover:text-lightBlue transition duration-300 ">About</a>
                    </li>
                    <li>
                        <a href='#services' className="font-semibold text-xl text-white hover:text-lightBlue transition duration-300 ">Services</a>
                    </li>
                    <li>
                        <a href='#pricing' className="font-semibold text-xl text-white hover:text-lightBlue transition duration-300 ">Pricing</a>
                    </li>
                    <li>
                        <a href='#testimonials' className="font-semibold text-xl text-white hover:text-lightBlue transition duration-300 ">Testimonials</a>
                    </li>
                </ul>
            </div> 
            {/* cta */}
            <div className='hidden lg:flex w-[186px] h-[78px] border-2 border-white flex items-center justify-center text-xl font-semibold text-white items-center hover:bg-white hover:text-darkBlue cursor-pointer transition duration-300'> 
                Contact Us
            </div>
        </div>
        {/* container end */}

        {/* SIDEBAR */}
        <div className={open ? 'lg:hidden absolute right-0 top-0 bg-second p-10 origin-right  transition duration-300 z-50' : 'scale-x-0 absolute right-0 top-0 bg-second p-10 origin-right  transition duration-300 z-50'} >
            {/* header */}
            <div className='flex items-center justify-between mb-10 '>
                <a href='' className='text-white font-bold text-xl '>Host Beta</a>
                <IoMdClose onClick={toggle} className='text-white text-[50px] lg:hidden cursor-pointer rounded-full hover:bg-darkBlue p-2 transition duration-300' />
            </div>
            {/* header end */}

            {/* menu */}
            <div className="menu ">
                <ul className='flex flex-col gap-10 mb-10'>
                    <li>
                        <a onClick={toggle} href='#home' className="font-semibold text-xl text-white hover:text-lightBlue transition duration-300 ">Home</a>
                    </li>
                    <li>
                        <a onClick={toggle} href='#about' className="font-semibold text-xl text-white hover:text-lightBlue transition duration-300 ">About</a>
                    </li>
                    <li>
                        <a onClick={toggle} href='#services' className="font-semibold text-xl text-white hover:text-lightBlue transition duration-300 ">Services</a>
                    </li>
                    <li>
                        <a onClick={toggle} href='#pricing' className="font-semibold text-xl text-white hover:text-lightBlue transition duration-300 ">Pricing</a>
                    </li>
                    <li>
                        <a onClick={toggle} href='#testimonials' className="font-semibold text-xl text-white hover:text-lightBlue transition duration-300 ">Testimonials</a>
                    </li>
                </ul>
                {/* cta */}
                <div className='flex  w-[186px] h-[78px] border-2 border-white flex items-center justify-center text-xl font-semibold text-white items-center hover:bg-white hover:text-darkBlue cursor-pointer transition duration-300'> 
                    Contact Us
                </div>
            </div> 
        </div>
        {/* sidebar end */}
    </nav>    
    <Home />
    <About />
    <Services />
    <Pricing />
    <Testimonials />
    <Newsletter />
    <Footer />
    </>
  )
}
