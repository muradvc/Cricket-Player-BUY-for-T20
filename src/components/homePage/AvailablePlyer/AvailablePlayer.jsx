import React, { use } from 'react';
import AvailablePBtn from '../AvailablePBtn/AvailablePBtn';

const AvailablePlayer =({playerPromise}) => {
  const data=use(playerPromise)
  return (
    <div className='w-10/12 mx-auto mt-10'>
      <button className=' bg-[#ffc814] font-bold  px-3 py-3 rounded-md'>Total Players : {data.length}</button>

      <AvailablePBtn data={data}></AvailablePBtn>

    </div>
  );
};

export default AvailablePlayer;