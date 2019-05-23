import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from './../../assets/images/logox500.fw.png';
import './styles/PreHomeSaveMoney.css';

class PreHomeSaveMoney extends Component {
    state = {}
    render() {
        return (
            <div className="PreHomeSaveMoney">
                <div className="PreHomeSaveMoneyLogo">
                    <img src={Logo} alt="Verde Agostini" />
                </div>
                <div className="PreHomeSaveMoneyText">
                    <p>Ahorrar no es solo guardar</p>
                    <p>sino saber gastar.</p>
                </div>
                <div className="PreHomeSaveMoneyEntry">
                    <Link to="/inicio" className="PreHomeSaveMoneyLink">Ingresar</Link>
                </div>
            </div>
        );
    }
}

export default PreHomeSaveMoney;