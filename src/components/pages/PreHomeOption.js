import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from './../../assets/images/logox500.fw.png';
import './styles/PreHomeOption.css';

class PreHomeOption extends Component {
    render() {
        return (
            <div className="PreHomeOption">
                <div className="PreHomeOptionBody">
                    <div className="PreHomeOptionLogo">
                        <img src={Logo} alt="Verde Agostini" />
                    </div>
                    <div className="PreHomeOptionText">
                        <p>Cambiar a energías renovables,</p>
                        <p>no es solo la mejor opción.</p>
                        <p>Es nuestra única opción</p>
                    </div>
                    <div className="w-100 text-center mt-4">
                        <Link to="/inicio" className="PreHomeOptionLink">Ingresar</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default PreHomeOption;