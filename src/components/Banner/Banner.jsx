import React from 'react';
import Img from '../../../src/assets/banner-main.png'
const Banner = () => {
  return (
    <div className='w-10/12 mx-auto mt-6 bg-[linear-gradient(120deg,#5f7cff_0%,#1a1f2e_30%,#000000_55%,#2a1a24_75%,#ff8fa3_100%)] rounded-2xl px-10 py-15'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <img className='w-30 sm:w-50 lg:w-60' src={Img} alt="" />
        <h1 className='text-[0.9rem] sm:text-[1.5rem] lg:text-3xl text-white font-bold whitespace-nowrap'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className='text-gray-300 text-[0.6rem] sm:text-[0.8rem] lg:text-xl'>Beyond Boundaries Beyond Limits</p>
        <button className=' bg-[#E7FE29] px-2 py-2 text-[0.8rem] sm:px-4 sm:text-[1rem] sm:py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 rounded-lg font-semibold outline-2 outline-offset-4 outline-[#E7FE29] shadow-xl hover:text-[#E7FE29] hover:bg-black duration-800 ease-in-out '>
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;