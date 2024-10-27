import React from "react"
import Group58 from './../../assets/Group 58.png'
import Group93 from './../../assets/Group93.png'
import lolo2 from './../../assets/lolo2.png'
import './../Order/Order.css'
const Order = () => {
    return (
        <div className="order">
            <div className="order-container">
                <div className="logo">
                    <img className= "photo" src={Group58} alt="SellKick Logo"/>
                </div>

                <div className="order-background">
                    <img src={Group93} alt="Order Background" />
                 
                </div>

            </div>

        </div>
    )
}

export default Order