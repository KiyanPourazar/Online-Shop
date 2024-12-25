import { useContext } from "react"
import { ShopContext } from "../../Context/shopContext"
const Product = (props) => {
    const { id, productName, productImage, price } = props.data
    const { cartItems, addCart, removeCart } = useContext(ShopContext)
    const isInCart = cartItems?.some((item) => item.id === id)
    return (
        <div className="col-3">
            <img src={props.data.productImage} className="w-100" />
            <h5>{productName}</h5>
            <p>price: {price}$</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button className="btn btn-info" onClick={() => addCart(id)}>
                +
                </button>

            <span className="mx-1">{cartItems?.filter((row) => row.id === id)[0]?.count}</span>
            
            {isInCart && <button className="btn btn-info" onClick={() => removeCart(id)}>
                -
                </button>}
            </div>
        </div>
    )
}

export default Product