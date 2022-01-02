import React, { useState } from 'react'
import logo from "../assets/images/logo.svg"
import { Link } from 'gatsby'
import { FaAlignJustify } from "react-icons/fa"

const Navigation = () => {
    const [show, setShow] = useState(false);
    return (
        <nav className='navbar'>
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/"><img src={logo} alt="simply recipe" /></Link>
                    <button className='nav-btn' onClick={() => setShow(!show)}>
                        <FaAlignJustify />
                    </button>
                </div>
                <div className={show ? "nav-links show-links" : "nav-links"}>
                    <Link to="/" className='nav-link' activeClassName='active-link' onClick={() => setShow(false)}>Home</Link>
                    <Link to="/recipes" className='nav-link' activeClassName='active-link' onClick={() => setShow(false)}>Recipes</Link>
                    <Link to="/tags" className='nav-link' activeClassName='active-link' onClick={() => setShow(false)}>Tags</Link>
                    <Link to="/about" className='nav-link' activeClassName='active-link' onClick={() => setShow(false)}>About</Link>
                    <div className="nav-link contact-link">
                        <Link to="/contact" className='btn'>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
