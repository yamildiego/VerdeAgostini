import React, { PureComponent } from 'react';
import './styles/Product.css';

class Product extends PureComponent {
    handleOnClick = () => {
        this.props.openModalUpdate(this.props)
    }
    render() {
        return (
            <div className="col-sm-6 col-xs-12">
                <div className="ProductContainer">
                    <div className="Product" onClick={this.handleOnClick}>
                        <div className="ProductLink">VER MAS</div>
                        <img src={this.props.image} alt="logo" className="brand-logo" />
                        <h3>{this.props.name}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;