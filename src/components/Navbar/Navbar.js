import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
    const [activeMenu, setActiveMenu] = useState('home');
    const {cartTotal} = useContext(StoreContext)
    
  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="Foodies Logo" className='logo' /></Link>
        <ul className="navbar-menu">
            <Link to='/' className={activeMenu === 'home' ? 'active' : ''} onClick={()=>setActiveMenu('home')}>home</Link>
            <a href='#explore-menu' className={activeMenu === 'menu' ? 'active' : ''} onClick={()=>setActiveMenu('menu')}>menu</a>
            <a href='#mobile-app' className={activeMenu === 'mobile-app' ? 'active' : ''} onClick={()=>setActiveMenu('mobile-app')}>mobile app</a>
            <a href='#footer' className={activeMenu === 'contact-us' ? 'active' : ''} onClick={()=>setActiveMenu('contact-us')}>contact us</a>
        </ul>

        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={cartTotal() === 0 ? '' : 'dot'}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default Navbar