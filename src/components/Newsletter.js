import React from 'react'

export default function Newsletter() {
  return (
    <div className='flex justify-center px-[40px] xl:px-[100px] py-[150px]'>
        <div className='flex flex-col items-center justify-center px-[20px] w-[1000px] py-[50px] md:py-[100px] rounded-[12px] bg-lightPurple relative overflow-hidden'>
            <div className='w-[500px] h-[500px] -mt-[500px] -ml-[1200px] border-[30px] border-lightBlue opacity-40  rounded-full absolute'></div>
            <h1 className='text-darkBlue font-semibold text-xl mb-5'>NEWSLETTER</h1>
            <h6 className='text-[20px] sm:text-[30px] lg:text-[60px] text-white text-center font-bold mb-10'>Subscribe to our Newsletter</h6>
            <form className='flex w-full justify-center items-center gap-5'>
                <input className='w-full h-[50px] md:w-[400px] md:h-[78px] text-xl font-semibold px-3 focus:outline-0' type="text" />
                <button className='w-[150px] h-[50px] text-base md:w-[186px] md:h-[78px]  bg-darkBlue text-white md:text-xl font-semibold hover:bg-second transition duration-300'>Subscribe</button>
            </form>
            <div className='w-[500px] h-[500px] mt-[600px] ml-[1200px] bg-lightBlue opacity-40  rounded-full absolute'></div>

        </div>
    </div>
  )
}
