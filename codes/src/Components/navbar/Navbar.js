import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom';
import logoSmall from '../../imgS/ScubaLiving_logo_small.svg';

import './Navbareren.css';

const Navbar = () => {
   
    return (
        <nav className="nav-wrapper">
            <div className="container-martin">
                <a href="#"><img className="navLogo" src={logoSmall} alt="logo" /></a>
                <ul className="navList" >
                    <li><Link to="/Scubaliving/">HOME</Link></li>
                    <li><NavLink to="/Scubaliving/produkter">DYKKERUDSTYR</NavLink></li>
                    <li><NavLink to="/Scubaliving/Resjer">REJSER</NavLink></li>
                    <li><NavLink to="/Scubaliving/DykkerKort">DYKKERKURSE</NavLink></li>
                    <li><NavLink to="/Scubaliving/footer">KONTAKT</NavLink></li>
                    <li><NavLink to="/Scubaliving/Header">OM OS</NavLink></li>
                </ul>



                <div className="container iconLogin">
                    <input aria-label="wallah" className="søgnavbar" type="text" />
                    <button type="button" className="btn btn-light">søg</button>


                    <div className="loginB">
                        <a> <i className="fas fa-lock"></i> </a>
                        <NavLink to="/Scubaliving/Login"  className="btn btn-secondary active">LogIn</NavLink>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default withRouter(Navbar);
