import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import logo8 from './../../assets/sss.png';
import logo6 from './../../assets/Group 58.png';
import './Store.css';
import products from './../data/storeitem.json';
import { FaRegHeart, FaHeart } from "react-icons/fa";

export const Store = ({ added, setadded, fav, setfav }) => {

    const [items, setItems] = useState([]);
    const [isLiked, setisLiked] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [cartItems, setCartItems] = useState([]);
    
  
    useEffect(() => {

        const Favourite_products = JSON.parse(localStorage.getItem("favitems")) || []
        // const likedStatus = new Array(products.length).fill(false);
        setItems(products);
        // setisLiked(new Array(products.length).fill(false))
        // Mark liked status for favorite items
        console.log(Favourite_products);

        // Favourite_products.forEach((favItem) => {
        //     const index = items.findIndex((item) => item.id === favItem.id);
        //     console.log(favItem.id);
        //     console.log(item.id);
        //     if (index !== -1) {
        //         likedStatus[index] = true
        //     }
        // });
        const likedStatus = new Array(products.length).fill(false);; // Initialize liked status
        Favourite_products.forEach((favItem) => {
            likedStatus[favItem.id] = true;
        });
        console.log(likedStatus);
        setisLiked(likedStatus);

        const storedCartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
        setCartItems(storedCartItems);
    
    }, []);

    // const handleSearch = (e) => {
    //     setSearchTerm(e.target.value);
    //   };
    //   let products = JSON.parse(localStorage.getItem("items"))
    //   const filteredProducts = products.filter((product) => {
    //     const title = product.name.toLowerCase();
    //     return title.includes(searchTerm.toLowerCase());
    //   });

    
    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
    };

    const filteredProducts = items.filter((product) => {
        const title = product.name.toLowerCase();
        return title.includes(searchTerm);
    });
    const addtocart = (id) => {
        let updatedAddedItems = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
        const filteredItems = items.filter((i) => i.id === id);
        updatedAddedItems.push(...filteredItems);
        localStorage.setItem("items", JSON.stringify(updatedAddedItems))
        setadded(JSON.parse(localStorage.getItem("items")));
        // console.log(updatedAddedItems);
    };

    const toggleCartItem = (id) => {
        const isInCart = cartItems.some((item) => item.id === id);
        let updatedCartItems = [];

        if (isInCart) {
            updatedCartItems = cartItems.filter((item) => item.id !== id);
        } else {
            updatedCartItems = [...cartItems, items.find((item) => item.id === id)];
        }

        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
    };


    let fav_items = localStorage.getItem("favitems") ? JSON.parse(localStorage.getItem("favitems")) : [];
    const addtofav = (id) => {
        const filteredItems = items.filter((i) => i.id === id);
        fav_items.push(...filteredItems);
        localStorage.setItem("favitems", JSON.stringify(fav_items))
        setfav(JSON.parse(localStorage.getItem("favitems")));
        // console.log(fav_items);
        setisLiked(!isLiked)
        const updatedLikedProducts = [...isLiked];
        updatedLikedProducts[id] = !updatedLikedProducts[id]; // Toggle liked status
        setisLiked(updatedLikedProducts);
        // const updatedLikedProducts = [...isLiked];
        // const index = items.findIndex((item) => item.id === id);
        // if (index !== -1) {
        //     updatedLikedProducts[index] = !updatedLikedProducts[index];
        // }
        // setisLiked(updatedLikedProducts);

        // Update fav_items based on the modified liked status
        if (updatedLikedProducts[id]) {
            // const filteredItems = items.filter((item) => item.id === id);
            // fav_items.push(...filteredItems);
        } else {
            const indexToRemove = fav_items.findIndex((item) => item.id === id);
            if (indexToRemove !== -1) {
                fav_items.splice(indexToRemove, 2);
            }
        }

        // Update local storage
        localStorage.setItem("favitems", JSON.stringify(fav_items));
    };


    return (
        <div className='store'>
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
            {/* <input id='search' type="text" placeholder='search' onChange={Search_product(e)}/> */}
            <input
                id='search'
                type='text'
                placeholder='Search by product title...'
                value={searchTerm}
                onChange={handleSearch}
            />
            <Row>
                {filteredProducts.map(item => (
                    <Col key={item.id} lg={3} sm={6} md={4} >
                        <div className='details-fav'>
                            <button className='heart' onClick={() => addtofav(item.id)}><i>
                                {isLiked[item.id] ? (
                                    <FaHeart className='heart_icon' style={{ color: 'red' }} />
                                ) : (
                                    <FaRegHeart className='heart_icon' />
                                )}
                            </i></button>
                            <img src={item.imgUrl} alt={item.name} />
                            <p>{item.name}</p>
                            <h5>Running Shoes</h5>
                            <h3>Price</h3>
                            <h4>${item.price}</h4>
                            <div className='details-but-fav'>
                                {/* <button onClick={() => addtocart(item.id)}>Add To Cart</button> */}
                                {cartItems.some((cartItem) => cartItem.id === item.id) ? (
                                    <button onClick={() => toggleCartItem(item.id)}>Remove From Cart</button>
                                ) : (
                                    <button onClick={() => toggleCartItem(item.id)}>Add To Cart</button>
                                )}
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Store;
