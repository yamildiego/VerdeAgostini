import React, { Component } from 'react';
import Logo from './../assets/images/logo.png'
import './styles/HomeSlide.css';

class HomeSlide extends Component {
    render() {
        return (
            <div className="HomeSlide">
                <div className="d-flex justify-content-between h-100">
                    <div className="w-50"></div>
                    <div className="w-50 h-100">
                        <div className="d-flex flex-column justify-content-center" style={{ height: "620px" }}>
                            <div className="text-center">
                                <img src={Logo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeSlide;