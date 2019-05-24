import React, { Component } from 'react';
import HomeSlide from './HomeSlide';
import OurServices from './OurServices';
import Section from './Section';
import './styles/Home.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <HomeSlide />
                <div className="HomeContainer">
                    <OurServices />
                    <Section />
                </div>
            </div>
        );
    }
}

export default Home;