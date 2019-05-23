import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/Footer.css';

class Footer extends Component {
    state = {}
    render() {
        return (
            <div className="Footer">
                <div className="d-flex justify-content-around w-100">
                    <div className="FooterRedesSociales">
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <a href="https://web.whatsapp.com/send?phone=64272325106&text=&source=&data=" title="Whatsapp" target="_blank">
                                    <div className="FooterBtnLink FoterW">
                                        <FontAwesomeIcon color="white" icon={['fab', 'whatsapp']} />
                                    </div>
                                </a>
                            </div>
                            <div className="p-2">
                                <a href="https://www.facebook.com/yamildieg0" title="Facebook" target="_blank">
                                    <div className="FooterBtnLink FooterF">
                                        <FontAwesomeIcon color="white" icon={['fab', 'facebook-f']} />
                                    </div>
                                </a>
                            </div>
                            <div className="p-2">
                                <a href="https://www.instagram.com/yamildiego/" title="Instagram" target="_blank">
                                    <div className="FooterBtnLink FooterI">
                                        <FontAwesomeIcon color="white" icon={['fab', 'instagram']} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="FooterText">
                            <span className="d-none d-lg-block">
                                <FormattedMessage locale={this.props.lang} id="footer.copyright" />
                            </span>
                            <span className="d-block d-lg-none">
                                <FormattedMessage locale={this.props.lang} id="footer.copyrightshort" />
                            </span>
                        </div>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/yamildiego/" target="_blank">
                            <div className="YD">
                                <FormattedMessage locale={this.props.lang} id="footer.yamildiego" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;