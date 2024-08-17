import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import logo8 from './../../assets/sss.png';
import logo6 from './../../assets/Group 58.png';
import './Fav.css';
import products from './../data/storeitem.json';

export const Fav = ({added,setadded}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(products);
    }, []);
    // let addeditems = []
    // const addtocart = (id) => {
    //     let it=items.filter((i) => i.id === id)
    //     addeditems.push(it)
    //     // let parsedp=JSON.parse(products)
    //     // let filtered=parsedp.filter((i)=>i.id===id)
    //     // filtered.isAdded=true;
    //     console.log(addeditems);
    //     setadded(addeditems)
    //     console.log(added);    
    // };
    /************************* */
    // let updatedAddedItems=localStorage.getItem("items")?
    // JSON.parse(localStorage.getItem("ProductsInCart")):[]
    // const addtocart = (id) => {
    //     // Filter the items based on the ID
    //     const filteredItems = items.filter((i) => i.id === id);
      
    //     // Create a new array with the filtered items
    //     updatedAddedItems = [ ...filteredItems];
    //     let x = localStorage.setItem("items",updatedAddedItems)
    //     JSON.stringify(x)
    //     // Update the state
    //     setadded(updatedAddedItems);
      
    //     // Log the updated state
    //     console.log(updatedAddedItems);
    //   };
    let updatedAddedItems = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
    const addtocart = (id) => {
        // Filter the items based on the ID
        const filteredItems = items.filter((i) => i.id === id);
    
        // Append the filtered items to the existing array
        updatedAddedItems.push(...filteredItems);
        localStorage.setItem("items",JSON.stringify(updatedAddedItems))
        // Update the state
        setadded(JSON.parse(localStorage.getItem("items")));
    
        // Log the updated state
        console.log(updatedAddedItems);
    };
    
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


            <Row>
                {items.map(item => (
                    <Col key={item.id} lg={3} sm={6} md={4} >
                        <div className='details-fav'>
                            <img src={item.imgUrl} alt={item.name} />
                            <p>{item.name}</p>
                            <h5>Running Shoes</h5>
                            <h3>Price</h3>
                            <h4>${item.price}</h4>
                            <div className='details-but-fav'>
                                <button onClick={() => addtocart(item.id)}>Add To Cart</button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

        </>
    );
}

export default Fav;
