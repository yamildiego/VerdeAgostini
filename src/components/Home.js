import React, { Component } from 'react';
import Slider from "react-slick";
import './styles/Home.css';
import ImageOne from './../assets/images/slide.jpg';
import ImageTwo from './../assets/images/4257.jpg';
import ImageThree from './../assets/images/leaves-15757_1920.jpg';

class Home extends Component {
    state = {}
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="Home">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <Slider {...settings}>
                                <div className="text-center">
                                    <img src={ImageOne} className="mx-auto w-100" />
                                </div>
                                <div className="text-center">
                                    <img src={ImageTwo} className="mx-auto w-100" />
                                </div>
                                <div className="text-center">
                                    <img src={ImageThree} className="mx-auto w-100" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;