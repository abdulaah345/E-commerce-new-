import React from 'react'
import logo5 from'./../../assets/image-removebg-preview (8) 1.png'
import logo6 from'./../../assets/Group 58.png'
import './../Offer/Offer.css'
const Offer = () => {
  return (
    <>
<div className="offer-banner">
            <div className="logo">
                <img  className="pho"src={logo6} alt="SellKick Logo" />
            </div>
            <div className="offer-details">
                <h1>Offers</h1>
                <h2>OFFERS TODAY</h2>
                <p>Buy now and get up to 50% off</p>
            </div>
            <div className="offer-icon">
                <img src={logo5} alt="Offer Icon" />
            </div>
        </div>
    </>
  )
}

export default Offer
