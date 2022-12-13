import React from 'react'



export default function () {
  return (
    <div className='w-full' id='about'>
      {/* container */}
      <div className="px-[40px] xl:px-[100px] w-full flex justify-center">
          {/* left side */}
          <div className='w-full mt-[70px] hidden lg:block'>
              {/* image */}
              <div className='relative'>
                {/* student */}
                <div className='w-[446px] h-[711px] bg-studentAbout bg-no-repeat bg-cover  absolute z-10'></div>
                {/* ellipse */}
              </div>
              {/* image end */}
          </div>
          {/* left side end */}

          {/* right side */}
          <div className='w-full flex flex-col mt-[150px]'>
            <div className='flex flex-col gap-3 mb-10'>
              <h6 className='text-lightBlue texl-xl font-semibold'>ABOUT HOST BETA</h6>
              <h1 className='text-[30px] md:text-[60px] text-white font-bold xl:w-[550px] lg:leading-[70px]'>The Perfect Digital Connection</h1>
              <p className='text-lightGray text-base font-medium sm:w-[441px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur adipiscing.</p>
            </div>
            {/* grid */}
            <div className='flex flex-col gap-5 sm:flex-row justify-between mb-[100px]'>          
              <div className='w-full flex flex-col gap-5 sm:gap-20'>    
                <div className='w-[165px] text-lightPurple text-semibold text-[24px]'>Faster Process</div>
                <div className='w-[155px] text-lightPurple text-semibold text-[24px]'>Faster Access</div>
              </div>
              <div className='w-full flex flex-col gap-5 sm:gap-20'>
                <div className='w-[165px] text-lightPurple text-semibold text-[24px]'>Faster Delivery</div>
                <div className='w-[201px] text-lightPurple text-semibold text-[24px]'>24/7 Full Support</div>
              </div>
            </div>
            {/* grid end */}
            {/* cta */}
            <button className='w-full lg:w-[186px] h-[78px] bg-btnColor text-xl font-semibold text-white hover:text-darkBlue transition duration-300'>Discover More</button>
          </div>
          {/* right side end */}

      </div>
      {/* container end */}
    </div>
  )
}
