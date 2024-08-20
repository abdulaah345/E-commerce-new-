import React, { createContext, useContext, useState } from 'react';
import Cart from './Cart/Cart';

export const cartcontext = createContext({});

const Providorc = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [checkoutItems, setCheckoutItems] = useState([]);
    // const [lastAddedItemId, setLastAddedItemId] = useState(null);

    // const addtocart = (item) => {
    //     setCartItems((prevItems) => [...prevItems, item]);
    //     setLastAddedItemId(item.id); // Save the last added item's ID
    //     console.log("Item added to cart:", item);
    // };
    const getItemQuantity=(id)=>{
        return cartItems.find((item)=>item.id===id)?.quantity||0;
    }
    const getItem=(id)=>{
        return checkoutItems.find((item)=>item.id===id)?.quantity||0;
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
    const addtocheckout = ({ id, quantity }) => {
        setCheckoutItems((curritem) => {
          // تحقق إذا كان العنصر موجوداً بالفعل في checkoutItems
          const itemInCheckout = curritem.find((item) => item.id === id);
      
          if (itemInCheckout == null) {
            // إضافة العنصر الجديد
            return [...curritem, { id, quantity }];
          } else {
            // تحديث الكمية إذا كان العنصر موجوداً
            return curritem.map((item) => {
              if (item.id === id) {
                return { ...item, quantity };
              }
              return item;
            });
          }
        });
      };
      
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
    const removeitem=(id)=>{
        setCartItems((curritem)=> curritem.filter((item)=>item.id!==id));
    }
    return (
        <cartcontext.Provider value={{ cartItems,checkoutItems,getItem,getItemQuantity,addtocheckout ,addtocart,decreaseitem,removeitem}}>
            {children}
           
        </cartcontext.Provider>
    );
};

export default Providorc;

export const useshoppingcart = () =>{
    return useContext(cartcontext);
};

