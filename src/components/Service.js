import React, { Component } from 'react';
import './styles/Services.css';

class Service extends Component {
    state = {}
    // onClick={handleClick}
    render() {
        return (
            <div className="Service col-6 col-md-3 mb-3" >
                <div className="card ServiceCard">
                    <div className="ServiceImage">
                        <img src={this.props.image} alt={this.props.title} />
                    </div>
                    <div className="card-body ServiceBody">
                        <div className="card-title ServiceTitle h6">{this.props.title}</div>
                        <button className="btn btn-info btn-sm btn-block mt-2">Ver mas</button>
                    </div>
                    <div className="card-footer ServiceFooter">
                        <small className="ServiceSubtitle">{this.props.subtitle}</small>
                    </div>
                </div>
            </div >
        );
    }
}

export default Service;