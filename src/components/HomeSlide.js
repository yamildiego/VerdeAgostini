import React, { Component } from 'react';
import Logo from './../assets/images/logox500.fw.png'
import './styles/HomeSlide.css';

class HomeSlide extends Component {
    render() {
        return (
            <div className="HomeSlide HomeSlideImage0">
                <div className="HomeSlideBody">
                    <div className="d-flex justify-content-between h-100">
                        <div className="w-50"></div>
                        <div className="HomeSlideLeft">
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeSlide;