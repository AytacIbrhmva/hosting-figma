import React from 'react';
import card1 from '../assets/icons/card1.png';
import card2 from '../assets/icons/card2.png';
import card3 from '../assets/icons/card3.png';
import card4 from '../assets/icons/card4.png';
import card5 from '../assets/icons/card5.png';
import card6 from '../assets/icons/card6.png';
import check from '../assets/icons/check.png';
import wordpress from '../assets/icons/wordpress.png';
import github from '../assets/icons/github.png';
import laravel from '../assets/icons/laravel.png';
import elementor from '../assets/icons/elementor.png';




export default function 
() {
  return (
    <div className='w-full h-full mt-[100px] ' id='services'>
      {/* container */}
      <div className='w-full  flex flex-col items-center px-[40px] xl:px-[100px] pt-[50px]'>
        {/* header */}
        <div className='flex flex-col gap-6 items-center mb-[50px]'>
          <h6 className='text-lightBlue texl-xl font-semibold'>OUR SERVICES</h6>
          <h1 className='text-[30px] lg:text-[60px] text-center text-white font-bold lg:w-[668px] lg:leading-[70px]'>Discover Luxury in WebHosting</h1>
        </div>
        {/* header end */}

        {/* cards */}
        <div className='flex flex-wrap justify-center gap-6 mb-[200px]'>
        
            {/* card */}
            <div className='w-[347px] h-[300px] flex flex-col gap-3 p-8 bg-second'>
              <img className='w-[60px] h-[60px] bg-white p-4 rounded-full' src={card1} alt="" />
              <h3 className='text-[32px] text-white font-semibold w-[291px] leading-[38x]'>Wordpress Hosting</h3>
              <p className='text-lightGray text-base font-medium w-[296px] '>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Duis efficitur dui nec.</p>
            </div>

            {/* card */}
            <div className='w-[347px] h-[300px] flex flex-col gap-3 p-8 bg-second'>
              <img className='w-[60px] h-[60px] bg-white p-4 rounded-full' src={card2} alt="" />
              <h3 className='text-[32px] text-white font-semibold w-[291px] leading-[38x]'>Cloud Hosting</h3>
              <p className='text-lightGray text-base font-medium w-[296px] '>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Duis efficitur dui nec.</p>
            </div>

            {/* card */}
            <div className='w-[347px] h-[300px] flex flex-col gap-3 p-8 bg-second'>
              <img className='w-[60px] h-[60px] bg-white p-4 rounded-full' src={card3} alt="" />
              <h3 className='text-[32px] text-white font-semibold w-[291px] leading-[38x]'>Website Hosting</h3>
              <p className='text-lightGray text-base font-medium w-[296px] '>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Duis efficitur dui nec.</p>
            </div>
      
            {/* card */}
            <div className='w-[347px] h-[300px] flex flex-col gap-3 p-8 bg-second'>
              <img className='w-[60px] h-[60px] bg-white p-4 rounded-full' src={card4} alt="" />
              <h3 className='text-[32px] text-white font-semibold w-[291px] leading-[38x]'>Free Domain</h3>
              <p className='text-lightGray text-base font-medium w-[296px] '>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Duis efficitur dui nec.</p>
            </div>

            {/* card */}
            <div className='w-[347px] h-[300px] flex flex-col gap-3 p-8 bg-second'>
              <img className='w-[60px] h-[60px] bg-white p-4 rounded-full' src={card5} alt="" />
              <h3 className='text-[32px] text-white font-semibold w-[291px] leading-[38x]'>SSL Service</h3>
              <p className='text-lightGray text-base font-medium w-[296px] '>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Duis efficitur dui nec.</p>
            </div>

            {/* card */}
            <div className='w-[347px] h-[300px] flex flex-col gap-3 p-8 bg-second'>
              <img className='w-[60px] h-[60px] bg-white p-4 rounded-full' src={card6} alt="" />
              <h3 className='text-[32px] text-white font-semibold w-[291px] leading-[38x]'>Cloud VPS</h3>
              <p className='text-lightGray text-base font-medium w-[296px] '>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Duis efficitur dui nec.</p>
            </div>
          
        </div>
        {/* cards end */}

        {/* bottom */}
        <div className='w-full h-full flex flex-col xl:flex-row gap-8 items-center'>
          {/* left side */}
          <div className='flex  w-full flex-col gap-3'>
            <div className='bg-second h-[130px] flex items-center pl-10 gap-8'>
              <img className='w-[60px] h-[60px] bg-white p-4 rounded-full' src={wordpress} alt="" />
              <label className='text-white text-xl font-bold'>Wordpress</label>
            </div>

            <div className='bg-second w-full  h-[130px] flex items-center pl-10 gap-8'>
              <img className='w-[60px] h-[60px] bg-white p-4 rounded-full' src={github} alt="" />
              <label className='text-white text-xl font-bold'>Github</label>
            </div>

            <div className='bg-second w-full h-[130px] flex items-center pl-10 gap-8'>
              <img className='w-[60px] h-[60px] bg-white p-4 rounded-full' src={laravel} alt="" />
              <label className='text-white text-xl font-bold'>Laravel</label>
            </div>

            <div className='bg-second w-full h-[130px] flex items-center pl-10 gap-8'>
              <img className='w-[60px] h-[60px] bg-white p-4 rounded-full' src={elementor} alt="" />
              <label className='text-white text-xl font-bold'>Elementor</label>
            </div>
          </div>
          {/* left side end */}

          {/*our capabilites*/}
          <div className='w-full flex flex-col'>
            <div className='flex flex-col gap-3 mb-10'>
              <h6 className='text-lightBlue texl-xl font-semibold '>OUR CAPABILITIES</h6>
              <h1 className='text-[30px] lg:text-[50px] text-white font-bold lg:w-[715px] lg:leading-[70px]'>From Skyline to the Shoreline, We Are There</h1>
              <p className='text-lightGray text-base font-medium lg:w-[715px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur adipiscing Quisque et imperdiet ipsum. Nunc molestie nunc ac augue sodales luctus..</p>
            </div>
            {/* grid */}
            <div className='flex justify-between mb-[50px]'>          
              <div className='w-full flex flex-wrap flex-col gap-10'>    
                <div className='flex items-center gap-3 text-lightPurple text-medium text-xl'>
                  <img className='w-4 h-3' src={check} alt="" />
                  Unlimited Bandwidth
                </div>
                <div className='flex items-center gap-3 text-lightPurple text-medium text-xl'>
                  <img className='w-4 h-3' src={check} alt="" />
                  Super Turbo Power
                </div>
              </div>
              <div className='w-full flex flex-wrap flex-col gap-10'>
                <div className='flex items-center gap-3 text-lightPurple text-medium text-xl'>
                    <img className='w-4 h-3' src={check} alt="" />
                    Unlimited Site
                  </div>
                  <div className='flex items-center gap-3 text-lightPurple text-medium text-xl'>
                    <img className='w-4 h-3' src={check} alt="" />
                    24/7 Full Support More Detail
                  </div>
              </div>
            </div>
            {/* grid end */}
            {/* cta */}
            <button className='w-full  xl:w-[186px] h-[78px] bg-btnColor text-xl font-semibold text-white hover:text-darkBlue transition duration-300'>More Detail</button>
          </div>
          {/*our capabilities end*/}
        </div>

      </div>
      {/* container end */}    
    </div>
  )
}
