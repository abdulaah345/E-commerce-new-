import React, { createContext, useState, useEffect } from 'react';

export const cartcontext = createContext();

const Providorc = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // استرجع العناصر من localStorage عند تحميل المكون
        const savedItems = localStorage.getItem('cartItems');
        return savedItems ? JSON.parse(savedItems) : [];
    });
    
    const [lastAddedItemId, setLastAddedItemId] = useState(null);

    const addtocart = (item) => {
        setCartItems((prevItems) => {
            const updatedItems = [...prevItems, item];
            localStorage.setItem('cartItems', JSON.stringify(updatedItems)); // حفظ العناصر في localStorage
            return updatedItems;
        });
        setLastAddedItemId(item.id);
        console.log("Item added to cart:", item);
    };

    useEffect(() => {
        // تحديث localStorage عند تغيير cartItems
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <cartcontext.Provider value={{ cartItems, addtocart, lastAddedItemId }}>
            {children}
        </cartcontext.Provider>
    );
};

export default Providorc;