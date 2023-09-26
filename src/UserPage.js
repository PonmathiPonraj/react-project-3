import React from 'react';
import { useCartContext } from './store/CartContext';
import CartButton from './CartButton'; // Import the CartButton component

function UserPage() {
    const { cartState } = useCartContext();
    const medicines = cartState.cart;

    return (
        <div>
            <h2>User Page</h2>
            {/* CartButton in the top right corner */}
            <div className="cart-button-container">
                <CartButton />
            </div>
            <div className="medicine-list">
            {/* Map and display medicines */}
                {medicines.map((medicine, index) => (
                    <div key={index} className="medicine-card">
                        <h3>{medicine.name}</h3>
                        <p>{medicine.description}</p>
                        <p>Price: ${medicine.price}</p>
                        <p>Quantity: {medicine.quantity}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserPage;