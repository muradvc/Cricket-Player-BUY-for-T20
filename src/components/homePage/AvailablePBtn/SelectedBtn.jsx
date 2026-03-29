import React from 'react';
import SelectedCard from '../../ui/SelectedCard';

const SelectedBtn = ({data}) => {
  return (
    <div className=' mx-auto mt-8'>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
        {
          data.map(player => {
            return <SelectedCard player={player}></SelectedCard>
          })
        }

      </div>

    </div>
  );
};

export default SelectedBtn;