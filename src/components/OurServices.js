import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Service from './Service';

class OurServices extends Component {
    render() {
        return (
            <div className="pt-5">
                <h1 className="text-center mb-3">
                    <FormattedMessage locale={this.props.lang} id="ourservices.title" />
                </h1>
                <div className="row">
                    {
                        this.props.products.map(item => {
                            return <Service
                                handleClickSeeMore={() => this.props.handleClickSeeMore(item)}
                                handleClickSeeMoreClose={this.handleClickSeeMoreClose}
                                key={item.id} {...item}
                            />
                        })
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        products: state.info[state.locale.lang].products
    }
}

export default connect(mapStateToProps)(OurServices);