import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Logo from './../../assets/images/logo.png';
import './styles/PreHomeFreeEnergy.css';

class PreHomeFreeEnergy extends Component {
    render() {
        return (
            <div className="PreHomeFreeEnergy">
                <div className="d-flex justify-content-between h-100">
                    <div className="w-50 PreHomeFreeEnergyBg">
                        <div className="d-flex flex-column justify-content-center h-100">
                            <div className="PreHomeFreeEnergyLogoText">
                                <FormattedMessage locale={this.props.lang} id="PreHomeFreeEnergy.textOne" />
                            </div>
                        </div>
                    </div>
                    <div className="PreHomeFreeEnergyLogo w-50 text-center h-100 bg-light">
                        <div className="d-flex flex-column justify-content-center h-100">
                            <div>
                                <img src={Logo} alt="Verde Agostini" />
                            </div>
                            <div className="PreHomeFreeEnergyLogoEntry">
                                <Link to="/inicio">
                                    <FormattedMessage locale={this.props.lang} id="prehome.enter" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        lang: state.locale.lang
    }
}

export default connect(mapStateToProps)(PreHomeFreeEnergy);