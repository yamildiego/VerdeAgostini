import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/Footer.css';

class Footer extends Component {
    state = {}
    render() {
        return (
            <div className="Footer">
                <div className="d-flex flex-row">
                    <div className="inner-div">
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <a href="https://web.whatsapp.com/send?phone=64272325106&text=&source=&data=" target="_blank">
                                    <div className="FooterBtnLink FoterW">
                                        <FontAwesomeIcon color="white" icon={['fab', 'whatsapp']} />
                                    </div>
                                </a>
                            </div>
                            <div className="p-2">
                                <a href="https://www.facebook.com/yamildieg0" target="_blank">
                                    <div className="FooterBtnLink FooterF">
                                        <FontAwesomeIcon color="white" icon={['fab', 'facebook-f']} />
                                    </div>
                                </a>
                            </div>
                            <div className="p-2">
                                <a href="https://www.instagram.com/yamildiego/" target="_blank">
                                    <div className="FooterBtnLink FooterI">
                                        <FontAwesomeIcon color="white" icon={['fab', 'instagram']} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="inner-div">

                            Copyruifbas ds as
                        </div>
                    </div>
                    <div>
                        <div className="inner-div">
                            Mi web
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;