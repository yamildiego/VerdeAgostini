import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Page from './pages/Page';
import OurServices from './OurServices';
import './styles/Home.css';
// import Slider from "react-slick";
// import ImageOne from './../assets/images/2264.jpg';
// import ImageTwo from './../assets/images/2264.jpg';
// import ImageThree from './../assets/images/2264.jpg';

class Home extends Component {
    render() {
        // let settings = {
        //     dots: true,
        //     infinite: true,
        //     speed: 500,
        //     autoplay: true,
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     arrows: false
        // };
        return (
            <Page>
                <div className="Home">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 p-0">
                                <div style={{ position: 'relative' }}>
                                    <div className="HomeBg"></div>
                                    <p className="HomePhrase">
                                        Si cuidamos la tierra,
                                </p>
                                    <p className="HomePhrase">
                                        la tierra nos cuidara
                                </p>
                                    <p className="HomePhrase">
                                        Cambiar a energias renobales, no es solo la mejor opcion
                                </p>
                                    <p className="HomePhrase">
                                        es nuestra unica opcion.
                                </p>
                                    <div className="row">
                                        <div className="col-12">
                                            <ul className="HomeCheckList mt-5 mb-5 w-50 float-right">
                                                <li><FontAwesomeIcon icon="check" />Lala das dasdbas</li>
                                                <li><FontAwesomeIcon icon="check" />Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
                                                <li><FontAwesomeIcon icon="check" />um? Veritatis sunt dolorum provident!</li>
                                                <li><FontAwesomeIcon icon="check" />Quo sunt eius fugiat optio, eveniet non velit impedit.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <OurServices />

                                {/* <div>
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
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}

export default Home;