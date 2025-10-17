
import { useState ,useContext} from 'react';
import './index.css';   
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
    const {getCartCount}=useContext(ShopContext)
    const [menu,setMenu]=useState('Shop')
    return(
        <nav className="navbar">
            <div className="logo">
                <Link to='/'>
                <img src="https://marketplace.canva.com/EAGR4J_-jYM/2/0/1600w/canva-colorful-abstract-online-shop-free-logo-zxo07UzxTDw.jpg" alt="E-commerce Logo" 
                className='nav-logo'/>
                </Link>
                <h1 className='nav-title'>E-Shop</h1>
            </div>
            <ul className="nav-links">
                <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==='Shop'?(<hr/>):""}</li>
                <li onClick={()=>{setMenu("Mens")}}><Link to='/Mens' style={{textDecoration:'none'}}>Mens</Link> {menu==='Mens'?(<hr/>):""}</li>
                <li onClick={()=>{setMenu("Womens")}}><Link to="Womens" style={{textDecoration:'none'}}>Womens</Link> {menu==='Womens'?(<hr/>):""}</li>
                <li onClick={()=>{setMenu("Kids")}}><Link to="Kids" style={{textDecoration:'none'}}>Kids</Link>  {menu==='Kids'?(<hr/>):""}</li>
            </ul>
            
            <div className='nav-right'>
                {localStorage.getItem("auth_token")? <button onClick={()=>{localStorage.removeItem("auth_token");window.location.replace('/')}} className="login-button">Logout</button>:
                <Link to='/login'>
                <button className="login-button">Login</button>
                </Link>}
                
                <div className="nav-cart">
                    <Link to='/cart'>
                    <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="Cart" className='nav-logo-cart'/>
                    </Link>
                    <div className='cart-logo-count'>
                      {getCartCount()}
                    </div>
                </div>
               
            </div>
        </nav>
    );
}

export default Navbar;