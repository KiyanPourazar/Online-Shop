import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart, faHome } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { ShopContext } from "../Context/shopContext"
import "./Nav.css"

const Nav = () => {
    const { cartItems } = useContext(ShopContext)
    const itemcount = cartItems?.reduce((prev, current) => {
        return prev + current.count
    }, 0)
    return (
        <div className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand">Kiyan Garage</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <FontAwesomeIcon icon={faHome} />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Cart" className="nav-link">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            {itemcount > 0 && <span className="cart-item-count">{itemcount}</span>}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav