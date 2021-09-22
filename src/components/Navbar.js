import React from 'react'

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <h1><a className="logo" href="#about">Rasheeda A</a></h1>
                         <ul className="nav-menu">
                             <li className="nav-item"><a href="#projects">Projects</a></li>
                             <li className="nav-item"><a href="#skills">Skills</a></li>
                             <li className="nav-item"><a href="#contact">Contact</a></li>
             </ul>
            </nav>   
        </header>
    )
}

export default Navbar
