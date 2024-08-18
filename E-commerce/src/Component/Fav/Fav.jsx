import React, { useState, useEffect, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import logo8 from './../../assets/sss.png';
import logo6 from './../../assets/Group 58.png';
import './../Fav/Fav.css';
import products from './../data/storeitem.json';
import {  useshoppingcart } from '../Providorc';

export const Fav = ({id}) => {
    const [items, setItems] = useState([]);
//   const {addtocart}=useContext(cartcontext);
  const {addtocart,getItemQuantity}= useshoppingcart();
  const quantity=gegetItemQuantity(id);
    useEffect(() => {
        setItems(products);
    }, []);

    return (
        <>
            <div className="fav-banner">
                <div className="logo">
                    <img className="pho" src={logo6} alt="SellKick Logo" />
                </div>
                <div className="fav-details">
                    <h1>Favourite</h1>
                </div>
                <div className="fav-icon">
                    <img src={logo8} alt="Offer Icon" />
                </div>
            </div>

            <Row >
                {items.map((item) => (
                    <Col key={item.id} md={4} xs={6} lg={3} className='g-5'>
                        <div className='details-fav'>
                            <img src={item.imgUrl} alt={item.name} />
                            <p>{item.name}</p>
                            <h5>Running Shoes</h5>
                            <h3>Price</h3>
                            <h4>${item.price}</h4>
                            <div className='details-but-fav'>
                                <button onClick={()=>addtocart(item.id)}>Add To Cart</button>
                            </div>
                        </div>

                    </Col>
                ))}
            </Row>

        </>
    );
}

export default Fav;
