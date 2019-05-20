import React, { Component } from 'react';
import Service from './Service';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './styles/OurServices.css';

class OurServices extends Component {
    state = {}
    render() {
        return (
            <div className="OurServices mt-5 mb-5">
                <h1>
                    <FormattedMessage locale={this.props.lang} id="title.ourservices" />
                </h1>
                <div className="row">
                    {
                        // // console.log(this.props)
                        this.props.services.map(item => {
                            return <Service key={item.id} {...item} />
                            // return <Service key={item.id} id={item.id} />
                        })
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        services: state.services[state.locale.lang].services
    }
}

export default connect(mapStateToProps)(OurServices);