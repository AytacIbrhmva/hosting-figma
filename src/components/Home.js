import React from 'react';
import counter1 from '../assets/icons/Positive reviews- counter.svg';
import counter2 from '../assets/icons/Active-hosting-counter.svg';
import student from '../assets/imgs/cheerful-african-american-male-student-using-lapto-47WVYNJ-1-800x859.png';
import vector1 from '../assets/icons/vector1.svg';
import vector2 from '../assets/icons/vector2.svg';
import vector3 from '../assets/icons/vector3.svg';
import client1 from '../assets/icons/client1.png';
import client2 from '../assets/icons/client2.png';
import client3 from '../assets/icons/client3.png';
import client4 from '../assets/icons/client4.png';
import client5 from '../assets/icons/client5.png';



export default function Home() {
  return (
    <div id='home' className='w-full mt-5'>
   
      {/* hero container*/}
      <div className='w-full pt-[30px] px-[40px] lg:pr-0 xl:pl-[100px] flex flex-col  lg:flex-row lg:justify-between'>
        {/* left side */}
        <div className='w-full mb-10 flex flex-col gap-3'>
          <h6 className='text-lightBlue texl-xl font-semibold '>WELCOME TO HOST BETA</h6>
          <h1 className='text-[30px] md:text-[50px] md:text-[73px] lg:text-[50px]  xl:text-[73px] sm:w-[550px] md:w-full lg:w-[420px] text-white font-bold xl:w-[563px] leading-[120%]'>Smart Company With Perfect Web Space</h1>
          <p className='text-lightGray text-base font-medium sm:w-[441px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur adipiscing commodo euismod condimentum nunc. </p>
          {/* ctas */}
          <div className='flex gap-5' >
            <button className='w-[186px] h-[78px] bg-btnColor text-xl font-semibold text-white hover:text-darkBlue transition duration-300'>Get Started</button>
            <button className='w-[186px] h-[78px] border-2 border-white text-white font-semibold text-xl hover:bg-white hover:text-darkBlue transition duration-300'>Hosting Plans</button>
          </div>
          {/* postivie reviews */}
          <div className='flex gap-5'>
            <div>
              <img className='w-[128px] h-[107px]' src={counter1} alt="" />
              <p className='text-lightGray text-base font-semibold'>Positive Reviews</p>
            </div>
            {/* active hosting */}
            <div>
              <img className='w-[128px] h-[107px]' src={counter2} alt="" />
              <p className='text-lightGray text-base font-semibold'>Active Hosting</p>
            </div>
          </div>
        </div>
        {/* left side end */}

        {/* right side */}
        <div className='right-0 relative hidden lg:block'>       
          <div className=' w-[600px] lg:w-[520px] h-[800px] bg-student flex items-end justify-end'>
            {/* boxes */}
            <div className='flex items-end'>
              {/* box left*/}
              <div className='w-[374px] h-[144px] pt-4 pl-4 bg-lightPurple flex'>
                <img className='mr-2 bg-white p-4 w-[60px] h-[60px] rounded-full' src={vector1} alt="" />           
                <div >
                  <h6 className='text-white font-bold text-base xl:text-xl'>Powerfull Server</h6>
                  <p className='text-white font-medium text-base xl:text-xl'>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </div>

              {/* box right*/}
              <div className='w-[314px] h-[253px] z-10  pt-4 pl-4 bg-btnColor bottom-0 '>
                <div className='flex mb-5 xl:mb-0'>
                  <img className='bg-white p-4 w-[60px] h-[60px] rounded-full' src={vector3} alt="" />           
                  <div className='ml-2'>
                    <h6 className='text-white font-bold text-xl'>Premium SSL</h6>
                    <p className='text-white font-medium text-xl '>Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>
                </div>

                <div className='flex'>
                  <img className='bg-white p-4 w-[60px] h-[60px] rounded-full' src={vector2} alt="" />           
                  <div className='ml-2'>
                    <h6 className='text-white font-bold text-xl'>27/7 Support</h6>
                    <p className='text-white font-medium text-xl'>Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>
                </div>
              </div>     
            </div>
            {/* boxes end */}
          </div>
        </div>
        {/* right side end */}

        {/* boxes mobile*/}
        <div className='flex flex-col items-center lg:hidden'>
          {/* box left*/}
          <div className='w-full pt-4 pl-4 pb-6 bg-lightPurple flex'>
            <img className='mr-2 bg-white p-4 w-[60px] h-[60px] rounded-full' src={vector1} alt="" />           
            <div >
              <h6 className='text-white font-bold text-base xl:text-xl'>Powerfull Server</h6>
              <p className='text-white font-medium text-base xl:text-xl'>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>

          {/* box right*/}
          <div className='w-full pt-4 pl-4 pb-6 bg-btnColor'>
            <div className='flex mb-5 xl:mb-0'>
              <img className='bg-white p-4 w-[60px] h-[60px] rounded-full' src={vector3} alt="" />           
              <div className='ml-2'>
                <h6 className='text-white font-bold text-xl'>Premium SSL</h6>
                <p className='text-white font-medium text-xl '>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>

            <div className='flex'>
              <img className='bg-white p-4 w-[60px] h-[60px] rounded-full' src={vector2} alt="" />           
              <div className='ml-2'>
                <h6 className='text-white font-bold text-xl'>27/7 Support</h6>
                <p className='text-white font-medium text-xl'>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>
          </div>     
        </div>
        {/* boxes end */}


   
      </div>
      {/* container end */}

      {/* trusted */}
      <div className='w-full h-full py-16 lg:py-[130px] bg-second'>
        {/* container */}
        <div className="w-full h-full px-[40px] xl:px-[100px] flex flex-col items-center justify-center gap-10">
          <h3 className='font-semibold text-center text-[40px] text-white'>Trusted by 2500+ Company Worldwide</h3>
          <div className='w-full flex flex-wrap  items-center justify-center gap-10'>
            <img src={client1} alt="w-[158px] h-[80px]" />
            <img src={client2} alt="w-[158px] h-[80px]" />
            <img src={client3} alt="w-[158px] h-[80px]" />
            <img src={client4} alt="w-[158px] h-[80px]" />
            <img src={client5} alt="w-[158px] h-[80px]" />
          </div>
        </div>
        {/* container end */}
      </div>
      {/* trusted end */}
    
    </div>
  )
}
