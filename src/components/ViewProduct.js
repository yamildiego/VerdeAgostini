import React, { Component } from 'react';
import './styles/ViewProduct.css';

class ViewProduct extends Component {
    state = {}
    render() {
        return (
            <div className="ViewProduct">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <div className="d-flex justify-content-center h-100">
                            <div className="d-flex align-items-center h-100">
                                <img className="mt-2 mb-2 w-100" src={this.props.image} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 p-3">
                        <h2 className="text-center">
                            {this.props.nameTechnical}
                        </h2>
                        <div className="ViewProductSubtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <p className="ViewProductText">{this.props.descriptionone}</p>
                        <p className="ViewProductText">{this.props.descriptiontwo}</p>
                        <p className="ViewProductText">{this.props.descriptionthree}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewProduct;