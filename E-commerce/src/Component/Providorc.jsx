import React, { createContext, useContext, useState } from 'react';
import Cart from './Cart/Cart';

export const cartcontext = createContext({});

const Providorc = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    // const [lastAddedItemId, setLastAddedItemId] = useState(null);

    // const addtocart = (item) => {
    //     setCartItems((prevItems) => [...prevItems, item]);
    //     setLastAddedItemId(item.id); // Save the last added item's ID
    //     console.log("Item added to cart:", item);
    // };
    const getItemQuantity=(id)=>{
        return cartItems.find((item)=>item.id===id)?.quantity||0;
    }
    const addtocart=(id)=>{
        setCartItems((curritem)=>{
            if(curritem.find((item)=>item.id===id)==null)
                {
                     return [...curritem,{id,quantity:1}];
            }
            else
            {
                return curritem.map((item)=>{

                    if(item.id===id){
                       return {...item,quantity:item.quantity+1};
                    }
                    else{
                        return item;
                    }
                })
            }
        })
    }
    const decreaseitem=(id)=>{
        setCartItems((curritem)=>{
            if(curritem.find((item)=>item.id===id)==null)
                {
                     return curritem.filter((item)=>item.id!==id);
            }
            else
            {
                return curritem.map((item)=>{

                    if(item.id===id){
                       return {...item,quantity:item.quantity-1};
                    }
                    else{
                        return item;
                    }
                })
            }
        })
    }
    return (
        <cartcontext.Provider value={{ cartItems,getItemQuantity, addtocart,decreaseitem}}>
            {children}
           
        </cartcontext.Provider>
    );
};

export default Providorc;

export const useshoppingcart = () =>{
    return useContext(cartcontext);
};

