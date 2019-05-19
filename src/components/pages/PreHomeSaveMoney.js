import React, { Component } from 'react';
import LogoPreHome from '../LogoPreHome';
import './styles/PreHomeSaveMoney.css';

class PreHomeSaveMoney extends Component {
    state = {}
    render() {
        return (
            <div className="PreHomeSaveMoney">
                <p>
                    Ahorrar no es solo guardar
                </p>
                <p>
                    sino saber gastar.
                </p>
                <LogoPreHome />
            </div>
        );
    }
}

export default PreHomeSaveMoney;