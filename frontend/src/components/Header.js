import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';

export default function Header() {
    return (
        <header id="main-header" className="headerClass">
            <div className="header-content">
                <Link to="/">
                    <img src={logo} alt="InstaReact" />
                </Link>
                <Link to="/new">
                    <img src={camera} alt="Enviar Publicação" />
                </Link>
            </div>
        </header>
    );
}
