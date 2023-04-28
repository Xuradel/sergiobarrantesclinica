import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useEffect } from 'react';
import Homepage from './Homepage';
import Products from './Products';
import Contact from './Contact';
import About from './About';
import { Routes, Route, Link } from 'react-router-dom';

function script() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        })
    }

    document.querySelectorAll(".nav-link").forEach(n => n.
        addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }))
}

const Header = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 1280px)' })

    useEffect(() => {
        if (isMobile) {
            script()
        }
    }, [])

    return (
        <>
            <header className='navbar'>
                <img src={require("../images/logoVet.png")} alt="logo" id="logo"></img>
                <nav>
                    <ul className="nav-menu">
                        <li className='nav-item'><a href="#" className='nav-link'><Link to='/homepage' className='nav-link'>Inicio</Link></a></li>
                        <li className='nav-item'><a href="#" className='nav-link'><Link to='/about' className='nav-link'>Nosotros</Link></a></li>
                        <li className='nav-item'><a href="#" className='nav-link'><Link to='/products' className='nav-link'>Productos</Link></a></li>
                        <li className='nav-item'><a href="#" className='nav-link'><Link to='/contact' className='nav-link'>Contacto</Link></a></li>
                    </ul>
                    <div className="hamburger">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </nav>
            </header>
            <Routes>
                <Route path='/homepage' element={<Homepage />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Products />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>
    )
}

export default Header;