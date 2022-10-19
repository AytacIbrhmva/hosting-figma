import React, {useEffect, useState} from 'react';
import About from './About';
import Footer from './Footer';
import Home from './Home';
import Newsletter from './Newsletter';
import Pricing from './Pricing';
import Services from './Services';
import Testimonials from './Testimonials';


export default function Navbar() {

  return (
    <>
    <nav className='w-full h-[138px] bg-darkBlue' >
        {/* container */}
        <div className="h-full w-full px-[100px] flex items-center  justify-between">
            {/* logo */}
            <a href='' className='text-white font-bold text-xl '>Host Beta</a>
            {/* menu */}
            <div className="menu">
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
            <div className='w-[186px] h-[78px] border-2 border-white flex items-center justify-center text-xl font-semibold text-white items-center hover:bg-white hover:text-darkBlue cursor-pointer transition duration-300'> 
                Contact Us
            </div>
        </div>
        {/* container end */}
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
