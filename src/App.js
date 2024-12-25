import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import Nav from './Components/Nav';
import {ShopContextProvider} from './Context/shopContext'

function App() {
    return (
        <div className='App'>
            <Router>
                <ShopContextProvider>
                <Nav />
                <Routes>
                    <Route path="/" element={<Shop />}/>
                    <Route path="/cart" element={<Cart />} />
                </Routes>

                </ShopContextProvider>
            </Router>
        </div>
    )
}
export default App;