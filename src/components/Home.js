import React, { Component } from 'react';
import Page from './pages/Page';
import HomeSlide from './HomeSlide';
import OurServices from './OurServices';
import Section from './Section';
import './styles/Home.css';

class Home extends Component {
    render() {
        return (
            <Page>
                <div className="Home">
                    <HomeSlide />
                    <div className="HomeContainer">
                        <OurServices />
                        <Section />
                    </div>
                </div>
            </Page>
        );
    }
}

export default Home;