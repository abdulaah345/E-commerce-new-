import React, { useState, useEffect, useContext } from 'react';
import { Row, Col, Button ,Alert, InputGroup,Form} from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

import logo8 from './../../assets/sss.png';
import logo6 from './../../assets/Group 58.png';
import './../Fav/Fav.css';
import products from './../data/storeitem.json';
import {  useshoppingcart } from '../Providorc';
import offerProducts from './../data/offerdata.json';

export const Fav = ({id}) => {
    const [items, setItems] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [search,setSearch]=useState('');
//   const {addtocart}=useContext(cartcontext);
  const {addtocart,getItemQuantity,removeitem}= useshoppingcart();

  
  const handleAddToCart = (itemId) => {
    addtocart(itemId);
    setShowAlert(true);
};
useEffect(() => {
    // قم بتصفية المنتجات بناءً على العروض وإزالة المنتجات المتكررة
    const filteredItems = products.filter(item => 
        !offerProducts.some(offerItem => offerItem.id === item.id)
    );
    setItems(filteredItems);
}, []);

setTimeout(() => {
    setShowAlert(false);
}, 3000)

   

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
            <Form className="d-flex justify-content-center">
        
                <InputGroup className='my-5 w-50'>
                    <Form.Control onChange={(e)=>setSearch(e.target.value)} placeholder='Search'  style={{backgroundColor:"#D9D9D9"}}  />
                </InputGroup>
            </Form>
            <Row >
                {items.filter((item)=>{
                  return search.toLowerCase() === '' 
                  ? item 
                  : item.name.toLowerCase().includes(search.toLowerCase());
                }).map((item) => (
                    <Col key={item.id} md={4} xs={6} lg={3} className='g-5'>
                        <div className='details-fav'>
                            <img src={item.imgUrl} alt={item.name} />
                            <p>{item.name}</p>
                            <h5>Running Shoes</h5>
                            <h3>Price</h3>
                            <h4>${item.price}</h4>
                            <div className='details-but-fav'>
                            {  getItemQuantity(item.id) === 0?  <button onClick={()=>handleAddToCart(item.id)}>Add To Cart</button>: (
                                    <Button style={{border:'none'}} onClick={()=>removeitem(item.id)}>Remove</Button>
                                )}
                            </div>
                        </div>

                    </Col>
                ))}
            </Row>
            <Alert 
                show={showAlert} 
                variant="dark" 
                onClose={() => setShowAlert(false)} 
                 
                className="custom-alert"
            >
                Item added to cart!
            </Alert>
        </>
    );
}

export default Fav;
