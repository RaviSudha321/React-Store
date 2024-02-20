import { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

export const CartContextProvider = ({children}) => {

    const [cartItems, setCartItems] = useState(localStorage.getItem('cartData') ? JSON.parse(localStorage.getItem('cartData')) : []);

    const addToCart = (item) => {
        const isItemInCart = cartItems.find((cartItem)=>cartItem.id === item.id);
        
        if(isItemInCart){

            setCartItems(
                cartItems.map((cartItem)=>{
                    return(
                        cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
                    )
                })
            )

        } else {
            setCartItems([...cartItems, {...item, quantity: 1}]);
        }
    }

    const removeFromCart = (item) => {

        const isInTheCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if(isInTheCart.quantity === 1){
            setCartItems(cartItems.filter((cartItem)=> cartItem.id !== item.id))
        } else {
            setCartItems(
                cartItems.map((cartItem)=>{
                    return cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
                })
            )
        }
    }

    const deleteFromCart = (item) => {
        const isInTheCart = cartItems.find((cartItem)=>cartItem.id === item.id);

        if(isInTheCart){
            setCartItems(
                cartItems.filter((cartItem)=> cartItem.id !== item.id)
            )
        }
    }

    const clearCart = () => {
        setCartItems([]);
    }

    const getCartTotal = () => {
        return cartItems.reduce((total, cartItem) => {
          return total + cartItem.price * cartItem.quantity;
        }, 0);
    };

    useEffect(()=>{
        localStorage.setItem('cartData', JSON.stringify(cartItems))
    }, [cartItems])

    useEffect(()=>{
        const cartData = localStorage.getItem('cartData');
        if(cartData){
            setCartItems(JSON.parse(cartData));
        }
    },[])
    
    return(
        <cartContext.Provider value={{cartItems, addToCart, removeFromCart, clearCart, getCartTotal, deleteFromCart}}>
            {children}
        </cartContext.Provider>
    )

}