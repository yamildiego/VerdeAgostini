import React, { Component } from 'react';
import Product from './../Product';
import { connect } from 'react-redux';

class Products extends Component {
    render() {
        return (
            <div className="container" style={{ paddingTop: "120px" }}>
                <div className="row">
                    {
                        this.props.products.map(item => {
                            return <Product key={item.id} {...item} />
                        })
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        lang: state.locale.lang,
        products: state.info[state.locale.lang].products
    }
}

export default connect(mapStateToProps)(Products);