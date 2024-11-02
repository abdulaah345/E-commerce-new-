import React from 'react'
import storeitems from "./../data/storeitem.json";
import { Row, Col, Button } from "react-bootstrap";
import { useshoppingcart } from '../Providorc';
const Favou = ({id,quantity}) => {
    const {removefav}=useshoppingcart();
    const item = storeitems.find((i) => i.id === id);
    
    if (item == null) return null;
 
  return (
    
    <Col   md={4} xs={6} lg={3} className='g-5'>
    <div className="details-out">
      <img src={item.imgUrl} alt={item.name} />
      <p>{item.name}</p>
      <h5>Running Shoes</h5>
      <h3>Price</h3>
      <h4>${item.price}</h4>
      
      
    </div>
  </Col>

    )
}

export default Favou