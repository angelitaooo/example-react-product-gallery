import React, {Component} from 'react';

const Cart = props => {
  const {cartItem} = props;
  console.log('cart', cartItem);
  return (
    <div className="cart">
      <ul>{cartItem.map(item => <li key={item.id}>{item.name}</li>)}</ul>
    </div>
  );
};

export default Cart;
