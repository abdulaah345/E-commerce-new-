import React, { useContext } from 'react';
import { cartcontext } from '../Providorc';
import { Row, Col } from 'react-bootstrap';

const Cart = () => {
    const { cartItems = [], lastAddedItemId } = useContext(cartcontext); // Get last added item's ID

    return (
        <div>
            <h1>Cart</h1>
            {cartItems.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                <Row>
                    {cartItems.map((item) => (
                        item.id === lastAddedItemId && ( // Check if the item's ID matches the last added ID
                            <Col key={item.id} md={4} xs={6} lg={3} className='g-5'>
                                <div className='details-fav'>
                                    <img src={item.imgUrl} alt={item.name} />
                                    <p>{item.name}</p>
                                    <h5>Running Shoes</h5>
                                    <h3>Price</h3>
                                    <h4>${item.price}</h4>
                                </div>
                            </Col>
                        )
                    ))}
                </Row>
            )}
        </div>
    );
};

export default Cart;