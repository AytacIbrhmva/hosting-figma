import React from 'react'

export default function () {
  return (
    <div className='w-full h-[887px]' id='about'>
      {/* container */}
      <div className="px-[100px] w-full flex justify-center">
          {/* left side */}
          <div className='w-full mt-[70px]'>
              {/* image */}
              <div className='relative'>
                {/* student */}
                <div className='w-[446px] h-[711px] bg-studentAbout bg-no-repeat bg-cover  absolute z-10'></div>
                {/* ellipse */}
                <div className='w-[500px] h-[500px] bg-lightPurple rounded-full absolute z-0'></div>
              </div>
              {/* image end */}
          </div>
          {/* left side end */}

          {/* right side */}
          <div className='w-full flex flex-col mt-[150px]'>
            <div className='flex flex-col gap-3 mb-10'>
              <h6 className='text-lightBlue texl-xl font-semibold'>ABOUT HOST BETA</h6>
              <h1 className='text-[60px] text-white font-bold w-[550px] leading-[70px]'>The Perfect Digital Connection</h1>
              <p className='text-lightGray text-base font-medium w-[441px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur adipiscing.</p>
            </div>
            {/* grid */}
            <div className='flex justify-between mb-[100px]'>          
              <div className='w-full flex flex-col gap-20'>    
                <div className='w-[165px] text-lightPurple text-semibold text-[24px]'>Faster Process</div>
                <div className='w-[155px] text-lightPurple text-semibold text-[24px]'>Faster Access</div>
              </div>
              <div className='w-full flex flex-col gap-20'>
                <div className='w-[165px] text-lightPurple text-semibold text-[24px]'>Faster Delivery</div>
                <div className='w-[201px] text-lightPurple text-semibold text-[24px]'>24/7 Full Support</div>
              </div>
            </div>
            {/* grid end */}
            {/* cta */}
            <button className='w-[186px] h-[78px] bg-btnColor text-xl font-semibold text-white hover:text-darkBlue transition duration-300'>Discover More</button>
          </div>
          {/* right side end */}

      </div>
      {/* container end */}
    </div>
  )
}
