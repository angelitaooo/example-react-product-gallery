import React from 'react';

const Card = props => {
  const {name, price, image, onToggleModal, id, addToCart} = props;
  return (
    <div className="card">
      <img src={image} />
      <h2>{name}</h2>
      <p>${price}</p>
      <button onClick={() => addToCart(id)}>Add to card</button>
      <button onClick={() => onToggleModal(id)}>Show details</button>
    </div>
  );
};

export default Card;
