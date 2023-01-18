import React from 'react'
import Logo from '../imagenes/logocityled.png'
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { useRef } from 'react';
import '../hojas-de-estilo/navbar.css';
import {Link} from "react-router-dom"


export const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <img className='logo-navbar' src={Logo} alt="" srcset="" />
            <nav ref={navRef}>
                <a href="/#">Nosotros</a>
                <a href="/#Products">Productos</a>
            
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
            <Link to={'/Cart'}>
            <button className='carrito-icon'>
                <FaShoppingCart/>
            </button>
            </Link>
        </header>
        
                  
    );




}

export default Navbar;