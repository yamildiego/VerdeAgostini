import React, { Component } from 'react';
import './styles/HomeSlide.css';

class HomeSlide extends Component {
    state = {
        homeBg: 0,
    }
    componentDidMount = () => {
        this.autoPlay();
    }
    autoPlay = () => {
        setTimeout(() => {
            this.nextBg();
            this.autoPlay();
        }, 3000)
    }
    nextBg = () => {
        if (this.state.homeBg >= 2)
            this.setState({ homeBg: 0 });
        else
            this.setState({ homeBg: this.state.homeBg + 1 });
    }
    render() {
        return (
            // <div className={"HomeSlide HomeSlideImage" + this.state.homeBg}>
            // </div>
            <div className="HomeSlide HomeSlideImage0">
                <div className="HomeSlideBody">
                    <h1 className="text-center">Contenido del Home</h1>
                </div>
            </div>
        );
    }
}

export default HomeSlide;