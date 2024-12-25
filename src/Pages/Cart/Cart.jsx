import React, { useContext } from "react"
import { PRODUCTS } from "../../Components/Data/Products"
import { ShopContext } from "../../Context/shopContext"
import Product from "../Shop/product"

const Cart = () => {
    const {cartItems} = useContext(ShopContext)
    return(
        <React.Fragment>
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <h1>Your Cart Items</h1>
        </div>
        <div className="row">
            {PRODUCTS.map((p) => {
                if(cartItems.some((i) => i.id === p.id && i.count > 0))
                    return <Product data={p}></Product>
            })}
        </div>
        </React.Fragment>
    )
}

export default Cart