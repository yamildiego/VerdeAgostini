import React, { Component } from 'react';
import LogoPreHome from '../LogoPreHome';
import './styles/PreHomeOption.css';

class PreHomeOption extends Component {
    state = {}
    render() {
        return (
            <div className="PreHomeOption">
                <LogoPreHome />
                <p>
                    Cambiar a energías renobables, no es solo la mejor opción.
                </p>
                <p>
                    Es nuestra única opción
                </p>

            </div >
        );
    }
}

export default PreHomeOption;