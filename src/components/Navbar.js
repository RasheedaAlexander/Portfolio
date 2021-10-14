import React from 'react'

const Navbar = () => {
    
    function menuDisplay() {

        const menu = document.querySelector('.nav-menu');

        if (menu.style.display === "block") {
            menu.style.display = "none";
          } else {
            menu.style.display = "block";
          }
    }

    return (
        <header>
            <nav className="navbar">
                <h1><a className="logo" href="#about">Rasheeda A</a></h1>
                         
                <a href="/#" id="home" onClick={menuDisplay}>
                 <i className="fa fa-bars fa-lg"></i>
                 </a>
                         
                         <ul className="nav-menu">
                             <li className="nav-item"><a href="#about">About</a></li>
                             <li className="nav-item"><a href="#projects">Projects</a></li>
                             <li className="nav-item"><a href="#contact">Contact</a></li>
                             

                             <a href="https://github.com/RasheedaAlexander"><button className="button"><i className="fa fa-github" aria-hidden="true"></i> Github</button></a>
                             
                             <a href="https://www.linkedin.com/in/rasheedaalexander/"><button className="button"><i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</button></a>
                             
                             
                             </ul>

             


            </nav>   
        </header>
    )
}

export default Navbar;