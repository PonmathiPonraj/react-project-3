import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';

function CartButton() {
  const { cartState } = useCartContext();
  return (
    <div>
      <Link to="/cart">Cart ({cartState.cart.length})</Link>
    </div>
  );
};

export default CartButton;