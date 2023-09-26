import React, { createContext, useContext, useEffect, useReducer } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Handle adding an item to the cart
      const updatedCartAdd = [...state.cart, action.payload];
      return { ...state, cart: updatedCartAdd };

    case 'REMOVE_FROM_CART':
      // Handle removing an item from the cart
      const updatedCartRemove = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cart: updatedCartRemove };

    case 'UPDATE_CART':
      // Handle updating the cart
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
      return { ...state, cart: updatedCart };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
    total: 0,
  };

  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    // You can handle fetching cart data from the API here if needed
  }, []);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};