import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from './../assets/images/logo.png';
import './styles/LogoPreHome.css'

class LogoPreHome extends Component {
    state = {}
    render() {
        return (
            <Link to="/inicio">
                <div className="LogoPreHome">
                    <div className="w-100">
                        <img src={Logo} alt="Verde Agostini" />
                    </div>
                    <span>
                        Ingresar
                </span>
                </div>
            </Link>
        );
    }
}

export default LogoPreHome;