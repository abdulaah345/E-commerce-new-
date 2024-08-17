import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import logo8 from './../../assets/sss.png';
import logo6 from './../../assets/Group 58.png';
import products from './../data/storeitem.json';
import './Cart.css'

const Cart = ({added}) => {
  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //   setItems(products);
  // }, []);
  console.log(added);
  
  return (
    <div className='cart'>
      <div className="fav-banner">
        <div className="logo">
          <img className="pho" src={logo6} alt="SellKick Logo" />
        </div>
        <div className="fav-details">
          <h1>Cart</h1>
        </div>
        <div className="fav-icon">
          <img src={logo8} alt="Offer Icon" />
        </div>
      </div>
      <Row>
        {added.map(item => (
          <Col key={item.id} lg={12} sm={12} md={12} >
            <div className='details-fav'>
              <img src={item.imgUrl} alt={item.name} />
              <p>{item.name}</p>
              <h5>Running Shoes</h5>
              <h3>Price</h3>
              <h4>${item.price}</h4>
              <div className='details-but-fav'>
                <button>Add To Cart</button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Cart