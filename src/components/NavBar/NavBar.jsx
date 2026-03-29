import React from 'react';
import Img from '../../../src/assets/Currency.png'
import logo from '../../../src/assets/logo.png'
const NavBar = ({coins}) => {
  return (
    <div className="navbar bg-base-100 w-10/12 mx-auto mt-2">
      <div className="flex-1">
        <a className=" text-xl"><img src={logo} alt="" /></a>
      </div>
      <div className='mr-5'>
        <ul className='flex gap-2 font-semibold'>
          <li><a href="/">Home</a></li>
          <li><a href="/">Fixture</a></li>
          <li><a href="/">Teams</a></li>
          <li><a href="/">Teams</a></li>
        </ul>
      </div>
      <div className="flex-none bg-gray-100 rounded-lg p-2">
        <button className="flex justify-between items-center font-bold text-md gap-2 "> {coins}    Coins
          <img src={Img} alt="" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;