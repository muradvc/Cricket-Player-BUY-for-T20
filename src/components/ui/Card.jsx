import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const Card = ({player}) => {
  return (
    <div>
      <div key={player.id} className=''>
                    <div className="card bg-base-100  shadow-sm mb-5 ">
                      {/* img part */}
                      <figure className=' p-5'>
                        <img className='rounded-md h-50'
                          src={player.playerImg}
                          alt="Shoes" />
                      </figure>
      
                      <div className="card-body">
                        {/* name part */}
                        <div className='border-b border-gray-300'>
                          <h2 className="card-title mb-2"><FaUser />{player.playerName}</h2>
      
                          <div className='flex justify-center items-center gap-2 mb-2'>
                            <FaFlag className='text-xl text-gray-500' />
                            <p className='mb-2 text-gray-500 '>{player.playerCountry}</p>
                            <button className='text-[0.8rem] px-3 py-1 bg-gray-200 rounded-md  text-gray-500'>{player.playerType}</button>
                          </div>
      
                        </div>
      
                        {/* last part */}
                        <div className='flex gap-60'>
                          <h2 className='font-semibold text-[1rem]'>Rating</h2>
                          <p className='font-semibold'>{player.rating}</p>
                        </div>
      
                        <div className="card-actions justify-between flex-col">
                          {/* batstyle */}
                          <div className='flex justify-between gap-30'>
                            <p className='text-[0.9rem] font-semibold whitespace-nowrap'>{player.battingStyle}</p>
                            {/* boll style */}
                            <p className='text-[0.9rem] text-gray-400 font-semibold whitespace-nowrap'>{player.bowlingStyle}</p>
      
                          </div>
      
                          {/* Price */}
      
      
                        </div>
      
                        <div className='flex gap-30 mt-3'>
                          <p className='text-[0.9rem] font-semibold'>Price : ${player.price}</p>
                          <button className='px-3 py-1 bg-gray-200 whitespace-nowrap rounded-md'>Choose Player</button>
                        </div>
      
                      </div>
      
                    </div>
                  </div>
    </div>
  );
};

export default Card;