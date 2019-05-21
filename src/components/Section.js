import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Tap from './../assets/images/tap.jpg';
import './styles/Section.css';

class Section extends Component {
    render() {
        return (
            <div className="Section row">
                <div className="col-md-6 pl-0 pr-0">
                    <img src={Tap} alt="" className="w-100" />
                </div>
                <div className="col-md-6 bg-white">
                    <div className="h-100 d-flex flex-column justify-content-between">
                        <div className="SectionItem">
                            <FontAwesomeIcon icon="check" />
                            <span className="SectionText"><FormattedMessage locale={this.props.lang} id="section.check01" /></span>
                        </div>
                        <div className="SectionItem">
                            <FontAwesomeIcon icon="check" />
                            <span className="SectionText"><FormattedMessage locale={this.props.lang} id="section.check02" /></span>
                        </div>
                        <div className="SectionItem">
                            <FontAwesomeIcon icon="check" />
                            <span className="SectionText"><FormattedMessage locale={this.props.lang} id="section.check03" /></span>
                        </div>
                        <div className="SectionItem">
                            <FontAwesomeIcon icon="check" />
                            <span className="SectionText"><FormattedMessage locale={this.props.lang} id="section.check04" /></span>
                        </div>
                        <div className="SectionItem">
                            <FontAwesomeIcon icon="check" />
                            <span className="SectionText"><FormattedMessage locale={this.props.lang} id="section.check05" /></span>
                        </div>
                        <div className="SectionItem">
                            <FontAwesomeIcon icon="check" />
                            <span className="SectionText"><FormattedMessage locale={this.props.lang} id="section.check06" /></span>
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

export default connect(mapStateToProps)(Section);