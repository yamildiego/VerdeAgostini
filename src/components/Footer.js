import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import './styles/Footer.css';
import SocialMedia from './SocialMedia';

class Footer extends Component {
    state = {}
    render() {
        return (
            <div>
                <SocialMedia className="d-block d-sm-none" />
                <div className="Footer">
                    <div className="d-flex justify-content-around w-100">
                        <SocialMedia className="d-none d-sm-block" />
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
                            <a href="https://www.instagram.com/yamildiego/" target="_blank" rel="noopener noreferrer">
                                <div className="YD">
                                    <FormattedMessage locale={this.props.lang} id="footer.yamildiego" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;