import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Tap from './../assets/images/tap.jpg';
import './styles/Section.css';

const icons = [
    "hand-holding-usd",
    "sun",
    "temperature-high",
    "heart",
    "check",
    "comment-dollar",
    "volume-mute",
    "cloud-showers-heavy",
    "receipt",
    "file-alt",
]
class Section extends Component {
    render() {
        return (
            <div className="Section row">
                <div className="col-md-6 pl-0 pr-0 SectionImage">
                    <img src={Tap} alt="" className="w-100" />
                </div>
                <div className="col-md-6 bg-white" style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <div className="row">
                        {
                            icons.map((item, index) => {
                                return <div key={index} className={(index === 8 || index === 9) ? "SectionItem col-6 last-child" : "SectionItem col-6"}>
                                    <div className="h-100 d-flex flex-column justify-content-center">
                                        <div>
                                            <FontAwesomeIcon icon={item} />
                                            <div className="SectionText"><FormattedMessage locale={this.props.lang} id={"section.check" + (index + 1)} /></div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
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