import React, { Component } from 'react';

class Service extends Component {
    state = {}
    // onClick={handleClick}
    render() {
        return (
            <div className="Service col-6 col-md-3 mb-3" >
                <div className="card Service-Card">
                    <div className="ServiceImage">
                        <img src={this.props.image} alt="" />
                    </div>
                    <div className="card-body Service-Body">
                        <div className="card-title Service-Title h6">{this.props.title}</div>
                        <button className="btn btn-info btn-sm btn-block mt-2">Ver mas</button>
                    </div>
                    <div className="card-footer Service-Footer">
                        <small className="Service-Subtitle">{this.props.subtitle}</small>
                    </div>
                </div>
            </div >
        );
    }
}

// function mapStateToProps(state, props) {
//     return {
//     }
// }

// export default connect(mapStateToProps)(Service);
// export default connect()(Service);
export default Service;