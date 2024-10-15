import React from 'react';
import logo8 from './../../assets/sss.png';
import logo6 from './../../assets/Group 58.png';
import { useshoppingcart } from '../Providorc';
import Checkout from './Checkout';

const Checks = () => {
    const { checkoutItems } = useshoppingcart();

    return (
        <div className="cart-page">
            <div className="cart-banner">
                <div className="logo">
                    <img className="pho" src={logo6} alt="SellKick Logo" />
                </div>
                <div className="cart-details">
                    <h1>Checkout</h1>
                </div>
                <div className="cart-icon">
                    <img src={logo8} alt="Offer Icon" />
                </div>
            </div>

            {/* Render Checkout only once */}
            <Checkout checkoutItems={checkoutItems} />
            
        </div>
    );
};

export default Checks;
