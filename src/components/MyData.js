import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './styles/MyData.css';

class MyData extends Component {
    state = {}
    render() {
        return (
            <div className="MyData">
                <h4><FormattedMessage locale={this.props.lang} id="contact.contactinformation" /></h4>
                <div className="MyData">
                    <div className="input-group mb-3">
                        <div class="input-group-prepend" style={{ paddingRight: "5px" }}>
                            <FontAwesomeIcon className="MyDataIcon" icon={['fab', 'whatsapp']} />
                        </div>
                        <input type="text" class="form-control" placeholder="" value="+54 (3442) 965845" />
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend" style={{ paddingRight: "5px" }}>
                            <FontAwesomeIcon className="MyDataIcon" icon="phone" />
                        </div>
                        <input type="text" class="form-control" placeholder="" value="+54 (3442) 965845" />
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend" style={{ paddingRight: "5px" }}>
                            <FontAwesomeIcon className="MyDataIcon" icon="at" />
                        </div>
                        <input type="text" class="form-control" placeholder="" value="info@maildecontacto.com" />
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend" style={{ paddingRight: "5px" }}>
                            <FontAwesomeIcon className="MyDataIcon" icon="map-marker-alt" />
                        </div>
                        <input type="text" class="form-control" placeholder="" value="Corrientes 239, Gualeguaychu, Entre Rios" />
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

export default connect(mapStateToProps)(MyData);


