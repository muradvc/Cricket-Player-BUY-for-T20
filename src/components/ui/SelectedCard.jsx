import React from 'react';

const SelectedCard = ({ player }) => {
  return (
    <div>
      <h3>{player.name}</h3>
      <p>Role: {player.role}</p>
      <p>Team: {player.team}</p>
    </div>
  );
};

export default SelectedCard;