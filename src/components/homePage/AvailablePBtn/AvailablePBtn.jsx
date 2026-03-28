import React from 'react';

import Card from '../../ui/Card';

const AvailablePBtn = ({ data }) => {
  console.log(data);
  return (

    <div className=' mx-auto mt-8'>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
        {
          data.map(player => {
            return <Card player={player}></Card>
          })
        }

   </div>

    </div>
  );
};

export default AvailablePBtn;