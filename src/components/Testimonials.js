import React from 'react';
import star from '../assets/icons/star.png';
import customer1 from '../assets/imgs/customer1.png';
import customer2 from '../assets/imgs/customer2.png';
import check from '../assets/icons/check.png';

export default function Testimonials() {
  return (
    <>
    <div id='testimonials' className='w-full h-full mt-[130px] pt-[30px] pb-[173px]'>
        <div className='w-full px-[100px] flex flex-col'>
            {/* header */}
            <div className='flex items-center justify-between mb-20'>
                {/* title */}
                <div className='flex flex-col gap-10'>
                    <h6 className='text-lightBlue texl-xl font-semibold'>TESTIMONIALS</h6>
                    <h1 className='text-[60px] text-white font-bold w-[600px] leading-[70px]'>What Customers Say About Us</h1>
                </div>
                {/* title end */}
                {/* cta */}
                <button className='w-[186px] h-[78px] bg-btnColor text-xl font-semibold text-white hover:text-darkBlue transition duration-300'>View More</button>
            </div>
            {/* header end */}
            {/* customers */}
            <div className='flex justify-between'>
                {/* img */}
                <div className='w-[369px] h-[367px] bg-customers'></div>
                {/* card */}
                <div className='w-[369px] h-[367px] px-10 py-16 flex flex-col justify-between  bg-second'>
                    {/* rating */}
                    <div className='flex'>
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                    </div>
                    {/* rating end */}
                    <p className='text-lightGray text-base font-medium w-[348px] '>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Duis efficitur dui nec Lorem ipsum dolor sit amet, consec tetur </p>
                    <div className='flex items-center gap-5'>
                        <img className='w-[70px] h-[70px]' src={customer1} alt="" />
                        <div>
                            <h6 className='text-white text-xl font-semibold mb-1'>Caleb Paul</h6>
                            <label className='text-lightBlue texl-[15px] font-medium'>Company CEO</label>
                        </div>
                    </div>
                </div>
                {/* card */}
                <div className='w-[369px] h-[367px] px-10 py-16 flex flex-col justify-between  bg-second'>
                    {/* rating */}
                    <div className='flex'>
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                    </div>
                    {/* rating end */}
                    <p className='text-lightGray text-base font-medium w-[348px] '>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Duis efficitur dui nec Lorem ipsum dolor sit amet, consec tetur </p>
                    <div className='flex items-center gap-5'>
                        <img className='w-[70px] h-[70px]' src={customer2} alt="" />
                        <div>
                            <h6 className='text-white text-xl font-semibold mb-1'>Akanni Boss</h6>
                            <label className='text-lightBlue texl-[15px] font-medium'>Product Manager</label>
                        </div>
                    </div>
                </div>
            </div>
            {/* customers end */}
        </div>
    </div>
    {/* sub */}
    <div className='bg-second h-[800px] flex items-center'>
        <div className='w-full px-[100px] flex justify-between'>
            {/* left */}
            <div className='w-full flex flex-col gap-10'>
                <h6 className='text-lightBlue texl-xl font-semibold'>GET STARTED</h6>
                <h1 className='text-[60px] text-white font-bold w-[621px] leading-[70px]'>Let's Start Here! New Space for World</h1>
                <p className='text-lightGray text-base font-medium w-[441px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur adipiscing Quisque et imperdiet ipsum.</p>
                {/* ctas */}
                <div className='flex gap-5'>
                    <button className='w-[186px] h-[78px] bg-btnColor text-xl font-semibold text-white hover:text-darkBlue transition duration-300'>Get Started</button>
                    <button className='w-[186px] h-[78px] border-2 border-white text-white font-semibold text-xl hover:bg-white hover:text-darkBlue transition duration-300'>Hosting Plans</button>
                </div>
                {/* ctas end */}
            </div>
            {/* left end */}

            {/* right */}
            <div className='w-full '>
                <div className='w-[595px] h-[631px] bg-darkBlue overflow-hidden'>
                    {/* list */}
                    <ul className='flex flex-col gap-3 pl-5 pt-10'>
                        <li className='flex items-center gap-3'>
                            <img src={check} alt="check" />
                            <p className='text-white text-base font-medium'>Unlimited Bandwidth</p>
                        </li>
                        <li className='flex items-center gap-3'>
                            <img src={check} alt="check" />
                            <p className='text-white text-base font-medium'>Super Turbo Power</p>
                        </li>
                        <li className='flex items-center gap-3'>
                            <img src={check} alt="check" />
                            <p className='text-white text-base font-medium'>24/7 Full Support More Detail</p>
                        </li>
                    </ul>
                    {/* list end */}
                    {/* ellipse */}
                    <div className='w-[578px] h-[578px] ml-[120px] bg-lightPurple rounded-full'>
                        <div className='bg-studentTestimonials w-[564px] h-[666px] bg-cover absolute -mt-[171px] -ml-[60px]'></div>
                    </div>

                    {/* ellipse end */}
                </div>
            </div>
            {/* right end */}
        
        </div>
    </div>
    </>
  )
}
