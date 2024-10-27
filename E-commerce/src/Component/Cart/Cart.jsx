// import React, { useContext } from 'react';
// import { cartcontext } from '../Providorc';
// import { Row, Col } from 'react-bootstrap';

// const Cart = () => {
//     const { cartItems = [], lastAddedItemId } = useContext(cartcontext); // Get last added item's ID

//     return (
//         <div>
//             <h1>Cart</h1>
//             {cartItems.length === 0 ? (
//                 <p>No items in cart</p>
//             ) : (
//                 <Row>
//                     {cartItems.map((item) => (
//                         item.id === lastAddedItemId && ( // Check if the item's ID matches the last added ID
//                             <Col key={item.id} md={4} xs={6} lg={3} className='g-5'>
//                                 <div className='details-cart'>
//                                     <img src={item.imgUrl} alt={item.name} />
//                                     <p>{item.name}</p>
//                                     <h5>Running Shoes</h5>
//                                     <h3>Price</h3>
//                                     <h4>${item.price}</h4>
//                                 </div>
//                             </Col>
//                         )
//                     ))}
//                 </Row>
//             )}
//         </div>
//     );
// };

// export default Cart;

// import React, { useContext } from 'react';
// import { useshoppingcart } from '../Providorc';
// import Cartitem from './Cartitem';
// import { Row } from 'react-bootstrap';
// import logo8 from './../../assets/sss.png';
// import logo6 from './../../assets/Group 58.png';

// const Cart = () => {

//      const{cartItems}=useshoppingcart();
//     return (
//         <div>
//            <div className="cart-banner">
//                 <div className="logo">
//                     <img className="pho" src={logo6} alt="SellKick Logo" />
//                 </div>
//                 <div className="cart-details">
//                     <h1>Cart</h1>
//                 </div>
//                 <div className="cart-icon">
//                     <img src={logo8} alt="Offer Icon" />
//                 </div>
//             </div>
            
//             {cartItems.map((item)=>(
//                 <Cartitem key={item.id} {...item}/>
                
              
//             ))}
          
    
//         </div>
//     );
// };

// export default Cart;
import React from 'react';
import { useshoppingcart } from '../Providorc';
import Cartitem from './Cartitem';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo8 from './../../assets/sss.png';
import logo6 from './../../assets/Group 58.png';
import './../Cart/cartitem.css'
const Cart = () => {
    const { cartItems, addAllToCheckout } = useshoppingcart();
    const navigate = useNavigate();

    const handelcheckout = () => {
        addAllToCheckout(); // نقل جميع العناصر إلى checkout
        navigate("/checks");
    };

    return (
        <div className="cart-page">
            <div className="cart-banner">
                <div className="logo">
                    <img className="pho" src={logo6} alt="SellKick Logo" />
                </div>
                <div className="cart-details">
                    <h1>Cart</h1>
                </div>
                <div className="cart-icon">
                    <img src={logo8} alt="Offer Icon" />
                </div>
            </div>
         
            <div className="cart-items">
                {cartItems.map((item) => (

                    <Cartitem key={item.id} {...item} 
                    />
                ))}
            </div>

            {cartItems.length > 0 && (
                <div className="checkout-container">
                    <Button className="checkout-button" onClick={handelcheckout}>
                        Check Out
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Cart;
