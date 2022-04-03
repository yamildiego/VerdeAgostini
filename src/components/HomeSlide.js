import React, { Component } from "react";
import { connect } from "react-redux";

import logo_es from "./../assets/images/logo_es.png";
import logo_en from "./../assets/images/logo_en.png";
import "./styles/HomeSlide.css";

class HomeSlide extends Component {
  render() {
    return (
      <div className="HomeSlide">
        <div className="d-flex justify-content-between h-100">
          <div className="w-50"></div>
          <div className="w-50 h-100">
            <div className="d-flex flex-column justify-content-center" style={{ height: "620px" }}>
              <div className="text-center">
                <img src={this.props.locale === "es" ? logo_es : logo_en} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    locale: state.locale.lang,
  };
}
export default connect(mapStateToProps)(HomeSlide);
