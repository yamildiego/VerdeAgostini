import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from './../../assets/images/logox500.fw.png';
import './styles/PreHomeInvesment.css';

class PreHomeInvesment extends Component {
    render() {
        return (
            <div className="PreHomeInvesment">
                <div class="d-flex justify-content-between h-100">
                    <div className="w-50 PreHomeInvesmentBg">
                        <div className="d-flex flex-column justify-content-center h-100">
                            <div className="PreHomeInvesmentLogoText">
                                No es un gasto es una inversión
                            </div>
                        </div>
                    </div>
                    <div className="PreHomeInvesmentLogo w-50 text-center h-100 bg-light">
                        <div className="d-flex flex-column justify-content-center h-100">
                            <div>
                                <img src={Logo} alt="Verde Agostini" />
                            </div>
                            <div className="PreHomeInvesmentLogoEntry">
                                <Link to="/inicio">Ingresar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PreHomeInvesment;