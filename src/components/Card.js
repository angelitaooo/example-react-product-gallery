import React from 'react';

const Card = props => {
  const {name, price, image, onToggleModal, id} = props;
  return (
    <div className="card" onClick={() => onToggleModal(id)}>
      <img src={image} />
      <h2>{name}</h2>
      <p>${price}</p>
    </div>
  );
};

export default Card;
