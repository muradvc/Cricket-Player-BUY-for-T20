import React, { use, useState } from 'react';
import AvailablePBtn from '../AvailablePBtn/AvailablePBtn';
import SelectedBtn from '../AvailablePBtn/SelectedBtn';

const AvailablePlayer =({playerPromise,setCoins,coins}) => {
  const data=use(playerPromise)

  const [selectedTab, setSelectedTab]=useState("Available");
  
  return (
    <div className='w-10/12 mx-auto mt-10'>
      <div className='flex justify-between '>

        {/* ternary rendaring */}

        { selectedTab === "Available"?
          (
            <h2 className=' bg-[#f5e8f505] font-bold  px-3 py-3 rounded-md shadow'>Total Available Players : {data.length}</h2>
          )
          :
          (
            <h2 className=' bg-[#f5e8f505] font-bold  px-3 py-3 rounded-md shadow'>All Selected Players :(0/  {data.length})</h2>
          )
          
        }

          {/* button render */}

        <div className='flex bg-gray-100 justify-center items-center  rounded-md border border-gray-300'>
          
          <button onClick={()=>setSelectedTab('Available')} className={` ${selectedTab==="Available" ? "bg-[#E7FE29]" : ""} mr-1  py-3 px-4 font-bold rounded-md shadow`}>Available</button>

          <button onClick={()=>setSelectedTab('Selected')} className={` ${selectedTab === "Selected" ? "bg-[#E7FE29]" : ""}  py-3 px-4 font-bold rounded-md shadow`}>Selected (0)  </button>

        </div>

      </div>

      {
        selectedTab === "Available"?
          (<AvailablePBtn data={data} setCoins={setCoins} coins={coins}></AvailablePBtn>)
           : 
           (<SelectedBtn data={data}></SelectedBtn>)
      }

    </div>
  );
};

export default AvailablePlayer;