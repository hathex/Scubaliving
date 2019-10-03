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
                    <li><Link to="/">HOME</Link></li>
                    <li><NavLink to="/produkter">DYKKERUDSTYR</NavLink></li>
                    <li><NavLink to="/Resjer">REJSER</NavLink></li>
                    <li><NavLink to="/DykkerKort">DYKKERKURSE</NavLink></li>
                    <li><NavLink to="/footer">KONTAKT</NavLink></li>
                    <li><NavLink to="/Header">OM OS</NavLink></li>
                </ul>



                <div className="container iconLogin">
                    <input aria-label="wallah" className="søgnavbar" type="text" />
                    <button type="button" className="btn btn-light">søg</button>


                    <div className="loginB">
                        <a> <i className="fas fa-lock"></i> </a>
                        <NavLink to="/Login"  className="btn btn-secondary active">LogIn</NavLink>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default withRouter(Navbar);
