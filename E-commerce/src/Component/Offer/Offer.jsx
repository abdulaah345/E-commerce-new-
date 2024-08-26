import React, { useEffect, useState } from 'react'
import logo5 from'./../../assets/image-removebg-preview (8) 1.png'
import logo6 from'./../../assets/Group 58.png'
import logo7 from'./../../assets/Group 76.png'
import logo9 from'./../../assets/bxs_offer (1).png'
import { Row, Col, Button ,Alert,Form,InputGroup} from 'react-bootstrap';
import { useshoppingcart } from '../Providorc';


import './../Offer/Offer.css'
import offerProducts from './../data/offerdata.json';
const Offer = () => {
    const { cartItems, addAllToCheckout,addtocart,removeitem ,getItemQuantity} = useshoppingcart();
    const[offeritems,setOfferitems]=useState([]);
    const [search,setSearch]=useState('');

    useEffect(()=>{
setOfferitems(offerProducts);

    },[])
    const handleAddToCart = (itemId) => {
        addtocart(itemId);
        
    };
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
        <Form className="d-flex justify-content-center">
        
        <InputGroup className='my-5 w-50 '>
            <Form.Control onChange={(e)=>setSearch(e.target.value)} placeholder='Search' style={{backgroundColor:"#D9D9D9"}} />
        </InputGroup>
    </Form>
        <Row >
                {offeritems.filter((item)=>{
                  return search.toLowerCase() === '' 
                  ? item 
                  : item.name.toLowerCase().includes(search.toLowerCase());
                }).map((item) => (
                    <Col key={item.id} md={4} xs={6} lg={3} className='g-5 p'>
                        <div className='details-offs'>
                            <img  src={item.imgUrl} alt={item.name} />
                            <p>{item.name}</p> 
                            
                            <img  src={logo9} />
                      
                        
                        </div>
                        <div className='details-but'>
                        {  getItemQuantity(item.id) === 0?  <button onClick={()=>handleAddToCart(item.id)}>BUY NOW</button>: (
                                    <Button style={{border:'none'}} onClick={()=>removeitem(item.id)}>Remove</Button>
                                )}
                        </div>
   
                    </Col>
                ))}
            </Row>

        {/* <div className='details-offer'>
                <img src={logo7}/>
            </div>
      
            </div> */}
    </>
  )
}

export default Offer
