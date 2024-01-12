import "./Header.css";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/icons/logo.png';
import { TfiUser } from "react-icons/tfi";
import { FiSearch } from "react-icons/fi";
import { PiShoppingCartSimple } from "react-icons/pi";

const Header = () => {
  return (
    <header>
        <div className="container">
                <div className="moving-container">
                    <div className="moving">Free Shipping! &#128666; Not Minimum Order Value!</div>
                    <div className="moving">Free Shipping! &#128666; Not Minimum Order Value!</div>
                    <div className="moving">Free Shipping! &#128666; Not Minimum Order Value!</div>
                    <div className="moving">Free Shipping! &#128666; Not Minimum Order Value!</div>
                </div>
            <nav>
                <div className="nav-links">
                   <a href="/" className="link">Home</a>
                   <a href="/" className="link">Shop All</a>
                </div>
                <a href="/">
                    <img src={logo} alt="" />
                </a>
                <div className="nav-icons">
                    <a href="/">
                        <TfiUser className='navIcon'/>
                    </a>
                    <a href="/">
                        <FiSearch className='navIcon'/>
                    </a>
                    <a href="/">
                        <PiShoppingCartSimple className='navIcon'/>
                    </a>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header
