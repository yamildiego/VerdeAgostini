import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Service from './Service';

class OurServices extends Component {
    state = {}
    render() {
        return (
            <div className="pt-5">
                <h1 className="text-center mb-3">
                    <FormattedMessage locale={this.props.lang} id="ourservices.title" />
                </h1>
                <div className="row">
                    {
                        this.props.services.map(item => {
                            return <Service key={item.id} {...item} />
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