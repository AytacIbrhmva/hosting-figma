import React from 'react';


export default function () {
  return (
    <div className='w-full h-full mt-[100px] pt-[50px]' id='pricing'>
        {/* container */}
        <div className='w-full h-full flex flex-col items-center px-[40px] xl:px-[100px]'>
            {/* header */}
            <div className='flex flex-col items-center gap-8 mb-[50px]'>
                <h6 className='text-lightBlue texl-xl font-semibold' >PRICING PLANS</h6>
                <h1 className='text-[30px] sm:text-[50px] lg:text-[60px] text-white font-bold w-full lg:leading-[70px] text-center'>Hosting With Freedom Built-In</h1>
            </div>
            {/* header end */}

            {/* cards */}
            <div className='flex flex-col xl:flex-row gap-10'>
                {/* card */}
                <div className='rounded-[20px] flex flex-col px-5 py-5 justify-between bg-white'>
                    {/* header */}
                    <div className='flex flex-col'>
                        <h3 className='text-[40px] font-bold'>Hatchling Plan</h3>
                        <h5 className='text-lightBlue text-[32px] font-medium'>Now 60% off!</h5>
                    </div>
                    {/* header end */}
                    <ul className='flex flex-col w-full gap-5'>
                        <li className='text-[24px] text-lightGray font-medium'>Single website</li>
                        <li className='text-[24px] text-lightGray font-medium'>One-click WordPress installs </li>
                        <li className='text-[24px] text-lightGray font-medium'>Free WordPress/cPanel website transfer</li>
                        <li className='text-[24px] text-lightGray font-medium'>Unmetered bandwidth</li>
                        <li className='text-[24px] text-lightGray font-medium'>Free SSL certificate</li>
                        <li className='text-[24px] text-lightGray font-medium'>Free domain included</li>
                    </ul>
                    {/* footer */}
                    <div className='flex flex-col'>
                        <label className='text-[24px] font-bold flex flex-col mb-8'>
                            Introductory offer
                            <span className='text-[32px] text-lightBlue font-medium'>$2.75/mo*</span>
                        </label>
                        <button className='w-[314px] h-[81px] self-center bg-lightBlue rounded-[10px] text-[24px] text-white font-bold hover:text-darkBlue transition duration-300'>Buy Now</button>
                    </div> 
                </div>

                {/* card */}
                <div className='rounded-[20px] flex flex-col px-5 py-5 justify-between bg-white'>
                    {/* header */}
                    <div className='flex flex-col'>
                        <h3 className='text-[40px] font-bold'>Hatchling Plan</h3>
                        <h5 className='text-lightBlue text-[32px] font-medium'>Now 60% off!</h5>
                    </div>
                    {/* header end */}
                    <ul className='flex flex-col w-full gap-5'>
                        <li className='text-[24px] text-lightGray font-medium'>Single website</li>
                        <li className='text-[24px] text-lightGray font-medium'>One-click WordPress installs </li>
                        <li className='text-[24px] text-lightGray font-medium'>Free WordPress/cPanel website transfer</li>
                        <li className='text-[24px] text-lightGray font-medium'>Unmetered bandwidth</li>
                        <li className='text-[24px] text-lightGray font-medium'>Free SSL certificate</li>
                        <li className='text-[24px] text-lightGray font-medium'>Free domain included</li>
                    </ul>
                    {/* footer */}
                    <div className='flex flex-col'>
                        <label className='text-[24px] font-bold flex flex-col mb-8'>
                            Introductory offer
                            <span className='text-[32px] text-lightBlue font-medium'>$2.75/mo*</span>
                        </label>
                        <button className='w-[314px] h-[81px] self-center bg-lightBlue rounded-[10px] text-[24px] text-white font-bold hover:text-darkBlue transition duration-300'>Buy Now</button>
                    </div> 
                </div>

                {/* card */}
                <div className='rounded-[20px] flex flex-col px-5 py-5 justify-between bg-white'>
                    {/* header */}
                    <div className='flex flex-col'>
                        <h3 className='text-[40px] font-bold'>Hatchling Plan</h3>
                        <h5 className='text-lightBlue text-[32px] font-medium'>Now 60% off!</h5>
                    </div>
                    {/* header end */}
                    <ul className='flex flex-col w-full gap-5'>
                        <li className='text-[24px] text-lightGray font-medium'>Single website</li>
                        <li className='text-[24px] text-lightGray font-medium'>One-click WordPress installs </li>
                        <li className='text-[24px] text-lightGray font-medium'>Free WordPress/cPanel website transfer</li>
                        <li className='text-[24px] text-lightGray font-medium'>Unmetered bandwidth</li>
                        <li className='text-[24px] text-lightGray font-medium'>Free SSL certificate</li>
                        <li className='text-[24px] text-lightGray font-medium'>Free domain included</li>
                    </ul>
                    {/* footer */}
                    <div className='flex flex-col'>
                        <label className='text-[24px] font-bold flex flex-col mb-8'>
                            Introductory offer
                            <span className='text-[32px] text-lightBlue font-medium'>$2.75/mo*</span>
                        </label>
                        <button className='w-[314px] h-[81px] self-center bg-lightBlue rounded-[10px] text-[24px] text-white font-bold hover:text-darkBlue transition duration-300'>Buy Now</button>
                    </div> 
                </div>
                
            </div>
            {/* cards end */}

            {/* map */}
            <div className='mt-[100px] flex flex-col items-center gap-5'>
                <h6 className='text-lightBlue texl-xl font-semibold'>SERVERS WORLDWIDE</h6>
                <h1 className='text-[30px] sm:text-[50px] lg:text-[60px] text-white font-bold lg:w-[791px] lg:leading-[70px] text-center'>Luxurious, Grand, Spacious, Always Uptime</h1>
                <div className='bg-map w-full h-[200px] sm:h-[400px] md:h-[500px] xl:w-[1255px] xl:h-[638px] mt-[50px] bg-contain bg-no-repeat '></div>
            </div>          
        </div>
    </div>
  )
}
