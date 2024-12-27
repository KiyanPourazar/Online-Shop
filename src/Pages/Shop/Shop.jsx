import "./Shop.css"
import React from "react"
import { PRODUCTS } from "../../Components/Data/Products"
import Product from './product'

const Shop = () => {
    return(
        <React.Fragment>
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <h1>SHOP</h1>
        </div>
        <div className="row">   
            {PRODUCTS.map((productData)=>{
               return <Product key={productData.id} data={productData} />
            })}
        </div>
        </React.Fragment>
    )
}

export default Shop