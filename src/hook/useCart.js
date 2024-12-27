import { useEffect, useState } from "react"
import { PRODUCTS } from "../Components/Data/Products"; 


export const useCart = () => {
    const [cartItems , setCartItems] =useState()
    
    useEffect(()=>{
        const data = localStorage.getItem("Kiyan_cart")
        setCartItems(!!JSON.parse(data) ? JSON.parse(data): [])
    },[])
    useEffect(()=>{
        if(cartItems !== undefined)
        localStorage.setItem("Kiyan_cart", JSON.stringify(cartItems))
    },[cartItems])
    const addCart = (itemId) => {
            
            const product = PRODUCTS.find((item) => item.id === itemId);
    
            if (!product) return; 
    
            const cartItem = cartItems.find((item) => item.id === itemId);
    
            if (!cartItem) {
                if (product.available > 0) {
                    setCartItems([...cartItems, { id: itemId, count: 1 }]);
                }
            } else {
                if (cartItem.count < product.available) {
                    setCartItems(
                        cartItems.map((item) =>
                            item.id === itemId
                                ? { ...item, count: item.count + 1 }
                                : item
                        )
                    );
                } else {
                    alert("OUT OF STOCK!"); 
                }
            }
        };
    
        const removeCart = (itemId) => {
            setCartItems(
                cartItems
                    .map((item) =>
                        item.id === itemId
                            ? { ...item, count: item.count - 1 }
                            : item
                    )
                    .filter((item) => item.count > 0) 
            );
        };
        const resetCart = () => {
            setCartItems()
            localStorage.removeItem("Kiyan_cart")
            localStorage.clear()
        }
    return {cartItems, addCart, removeCart, resetCart}
}