import React, { createContext, useContext, useState, useEffect } from 'react';

export const cartcontext = createContext({});
const initialcartitem = localStorage.getItem("shopping") ? JSON.parse(localStorage.getItem("shopping")) : [];
const inialcheckout = localStorage.getItem("checkout") ? JSON.parse(localStorage.getItem("checkout")) : [];
const initialFavorites = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [];
const initialFav = localStorage.getItem("favo") ? JSON.parse(localStorage.getItem("favo")) : [];

const Providorc = ({ children }) => {
    const [cartItems, setCartItems] = useState(initialcartitem);
    const [checkoutItems, setCheckoutItems] = useState(inialcheckout);
    const [favoriteItems, setFavoriteItems] = useState(initialFavorites);
    const [fav, setFav] = useState(initialFav);


    useEffect(() => {
        localStorage.setItem("shopping", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem("checkout", JSON.stringify(checkoutItems));
    }, [checkoutItems]);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favoriteItems));
    }, [favoriteItems]);
    useEffect(() => {
        localStorage.setItem("favo", JSON.stringify(fav));
    }, [fav]);

    const getItemQuantity = (id) => cartItems.find((item) => item.id === id)?.quantity || 0;

    const addtocart = (id) => {
        setCartItems((curritem) => {
            if (!curritem.find((item) => item.id === id)) {
                return [...curritem, { id, quantity: 1 }];
            } else {
                return curritem.map((item) => item.id === id 
                    ? { ...item, quantity: item.quantity + 1 } 
                    : item
                );
            }
        });
    };
    const addtofav = (id) => {
        setFav((curritem) => {
            if (!curritem.find((item) => item.id === id)) {
                return [...curritem, { id, quantity: 1 }];
            } else {
                return curritem.map((item) => item.id === id 
                    ? { ...item, quantity: item.quantity + 1 } 
                    : item
                );
            }
        });
    };

    const addtocheckout = ({ id, quantity }) => {
        setCheckoutItems((curritem) => {
            const itemInCheckout = curritem.find((item) => item.id === id);
            if (!itemInCheckout) {
                return [...curritem, { id, quantity }];
            } else {
                return curritem.map((item) => item.id === id 
                    ? { ...item, quantity } 
                    : item
                );
            }
        });
    };

    const decreaseitem = (id) => {
        setCartItems((curritem) => 
            curritem.map((item) => item.id === id 
                ? { ...item, quantity: item.quantity - 1 } 
                : item
            )
        );
    };

    const addAllToCheckout = () => {
        setCheckoutItems(cartItems);
    };

    const removeitem = (id) => {
        setCartItems((curritem) => curritem.filter((item) => item.id !== id));
    };
    const removefav = (id) => {
        setFav((curritem) => curritem.filter((item) => item.id !== id));
    };

    // Favorite Functions
    const addToFavorite = (id) => {
        setFavoriteItems((prevFavorites) => !prevFavorites.includes(id)
            ? [...prevFavorites, id]
            : prevFavorites
        );
    };

    const removeFromFavorite = (id) => {
        setFavoriteItems((prevFavorites) => prevFavorites.filter((favId) => favId !== id));
    };

    const isFavorite = (id) => favoriteItems.includes(id);

    return (
        <cartcontext.Provider 
            value={{
                cartItems,
                checkoutItems,
                favoriteItems,
                fav,
                addAllToCheckout,
                getItemQuantity,
                addtocheckout,
                addtocart,
                decreaseitem,
                removeitem,
                addtofav,
                removefav,
                addToFavorite,
                removeFromFavorite,
                isFavorite
            }}
        >

            {children}
        </cartcontext.Provider>
    );
};

export default Providorc;

export const useshoppingcart = () => useContext(cartcontext);
