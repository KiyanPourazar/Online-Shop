import { createContext, useState } from "react";
import { PRODUCTS } from "../Components/Data/Products"; 

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

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

    return (
        <ShopContext.Provider value={{ cartItems, addCart, removeCart }}>
            {props.children}
        </ShopContext.Provider>
    );
};
