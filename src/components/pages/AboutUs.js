import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import AboutUsImage from './../../assets/images/home-casco.jpg';

import './styles/AboutUs.css';

class AboutUs extends Component {
    render() {
        return (
            <div style={{ paddingTop: "100px" }}>
                <h1 className="text-center">
                    <FormattedMessage locale={this.props.lang} id="aboutus.title" />
                </h1>
                <p className="text-center ContactSubtitle">
                    <FormattedMessage locale={this.props.lang} id="aboutus.subtitle" />
                </p>
                <div className="row">
                    <div className="col-lg-6 pl-0 pr-0">
                        <img src={AboutUsImage} alt="" className="w-100" />
                    </div>
                    <div className="col-lg-6 bg-white">
                        <h2 className="text-center mt-4">VerdeAgostini</h2>
                        <p className="text-justify p-3">
                            <FormattedMessage locale={this.props.lang} id="aboutus.paragraphone" />
                        </p>
                        <p className="text-justify p-3">
                            <FormattedMessage locale={this.props.lang} id="aboutus.paragraphtwo" />
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToprops(state, props) {
    return {
        lang: state.locale.lang
    }
}

export default connect(mapStateToprops)(AboutUs);