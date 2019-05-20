import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from './../assets/images/logox500.fw.png';
import './styles/LogoPreHome.css'

class LogoPreHome extends Component {
    render() {
        return (
            <div className="LogoPreHome">
                <Link to="/inicio" className="LogoPreHomeEntry">
                    <div className="w-100">
                        <img src={Logo} alt="Verde Agostini" />
                    </div>
                    <span className="LogoPreHomeText">
                        Ingresar
                    </span>
                </Link>
            </div>
        );
    }
}

export default LogoPreHome;