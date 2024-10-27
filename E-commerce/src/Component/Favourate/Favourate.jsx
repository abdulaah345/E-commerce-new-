import React from 'react'


import logo8 from './../../assets/sss.png';
import logo6 from './../../assets/Group 58.png';
import './../Favourate/Favourate.css';
import { useshoppingcart } from '../Providorc';
import Favou from './Favou';
import { Row } from 'react-bootstrap';

const Favourate = () => {
    const { fav} = useshoppingcart();

  return (
    <div className="fav">
            <div className="fav-banner">
                <div className="logo">
                    <img className="pho" src={logo6} alt="SellKick Logo" />
                </div>
                <div className="fav-details">
                    <h1>Favourate</h1>
                </div>
                <div className="fav-icon">
                    <img src={logo8} alt="Offer Icon" />
                </div>
            </div>
            <Row>


           
                {fav.map((item) => (

                    <Favou key={item.id} {...item}  />
                    
                ))}

         
            </Row>
        
            </div>

  )
}

export default Favourate;