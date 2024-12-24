import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart, faHome } from "@fortawesome/free-solid-svg-icons"
const Nav = () => {
    return(
        <div className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand">Kiyan Shop</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                        <FontAwesomeIcon icon={faHome}/>
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/Cart" className="nav-link">
                        <FontAwesomeIcon icon={faShoppingCart}/>
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav