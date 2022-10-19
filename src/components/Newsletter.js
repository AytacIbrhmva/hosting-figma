import React from 'react'

export default function Newsletter() {
  return (
    <div className='flex justify-center px-[100px] py-[150px]'>
        <div className='flex flex-col items-center justify-center w-[1000px] h-[400px] rounded-[12px] bg-lightPurple relative overflow-hidden'>
            <div className='w-[500px] h-[500px] -mt-[500px] -ml-[1200px] border-[30px] border-lightBlue opacity-40  rounded-full absolute'></div>
            <h1 className='text-darkBlue font-semibold text-xl mb-5'>NEWSLETTER</h1>
            <h6 className='text-[60px] text-white font-bold mb-10'>Subscribe to our Newsletter</h6>
            <form className='flex items-center gap-5'>
                <input className='w-[400px] h-[78px] text-xl font-semibold px-3 focus:outline-0' type="text" />
                <button className='w-[186px] h-[78px]  bg-darkBlue text-white text-xl font-semibold hover:bg-second transition duration-300'>Subscribe</button>
            </form>
            <div className='w-[500px] h-[500px] mt-[600px] ml-[1200px] bg-lightBlue opacity-40  rounded-full absolute'></div>

        </div>
    </div>
  )
}
