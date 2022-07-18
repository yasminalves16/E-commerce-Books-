import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext([ ])

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cart")) || []
    )

    useEffect(() =>{
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])


    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeFromCart = (item) => {

        const list = cart.filter((product, index) => item !== index);
        console.log(list)
        localStorage.setItem("cart", JSON.stringify(list));

        setCart(list)

    }

    console.log(cart)

    

    return(
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, setCart }} >
        {children}</CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
