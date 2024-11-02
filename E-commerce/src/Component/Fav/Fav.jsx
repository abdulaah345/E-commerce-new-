import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Alert, InputGroup, Form } from 'react-bootstrap';
import { FaSearch, FaHeart } from 'react-icons/fa';
import logo8 from './../../assets/sss.png';
import logo6 from './../../assets/Group 58.png';
import './../Fav/Fav.css';
import products from './../data/storeitem.json';
import { useshoppingcart } from '../Providorc';
import offerProducts from './../data/offerdata.json';

export const Fav = ({ id }) => {
    const [items, setItems] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [search, setSearch] = useState('');
    const [favorites, setFavorites] = useState([]);

    const { addtocart, getItemQuantity, removeitem, removefav, addtofav } = useshoppingcart();

    // حفظ العناصر المفضلة في Local Storage
    const saveFavoritesToLocalStorage = (favorites) => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    // تحميل العناصر المفضلة من Local Storage
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
        if (storedFavorites) {
            setFavorites(storedFavorites);
        }
    }, []);

    const handleAddToCart = (itemId) => {
        addtocart(itemId);
        setShowAlert(true);
    };
    

    const handleAddToFavorites = (itemId) => {
        let updatedFavorites;
        if (favorites.includes(itemId)) {
            updatedFavorites = favorites.filter(id => id !== itemId); // إزالة من المفضلة
            removefav(itemId);
        } else {
            updatedFavorites = [...favorites, itemId]; // إضافة إلى المفضلة
            addtofav(itemId);
        }
        setFavorites(updatedFavorites);
        saveFavoritesToLocalStorage(updatedFavorites); // تحديث Local Storage
    };

    useEffect(() => {
        const filteredItems = products.filter(item => 
            !offerProducts.some(offerItem => offerItem.id === item.id)
        );
        setItems(filteredItems);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [showAlert]);

    return (
        <div className="fav">
            <div className="fav-banner">
                <div className="logo">
                    <img className="pho" src={logo6} alt="SellKick Logo" />
                </div>
                <div className="fav-details">
                    <h1>Store</h1>
                </div>
                <div className="fav-icon">
                    <img src={logo8} alt="Offer Icon" />
                </div>
            </div>
            <Form className="d-flex justify-content-center">
                <InputGroup className='my-5 w-50'>
                    <Form.Control 
                        onChange={(e) => setSearch(e.target.value)} 
                        placeholder='Search' 
                        style={{ backgroundColor: "#D9D9D9" }} 
                    />
                </InputGroup>
            </Form>
            <Row>
                {items.filter(item => {
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
                                {getItemQuantity(item.id) === 0 
                                    ? <button onClick={() => handleAddToCart(item.id)}>Add To Cart</button> 
                                    : <Button style={{ border: 'none' }} onClick={() => removeitem(item.id)}>Remove</Button>
                                }
                                <button 
                                    onClick={() => handleAddToFavorites(item.id)} 
                                    className="fav-button"
                                    style={{ background: 'none', border: 'none', color: favorites.includes(item.id) ? 'red' : 'grey' }}
                                >
                                    <FaHeart /> {favorites.includes(item.id) ? "Remove from Favorite" : "Add to Favorite"}
                                </button>
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
        </div> 
    );
};

export default Fav;
