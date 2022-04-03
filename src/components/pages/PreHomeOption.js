import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo_es from "../../assets/images/logo_es.png";
import logo_en from "../../assets/images/logo_en.png";
import "./styles/PreHomeOption.css";

class PreHomeOption extends Component {
  render() {
    return (
      <div className="PreHomeOption">
        <div className="PreHomeOptionBody">
          <div className="PreHomeOptionLogo">
            <img src={this.props.lang === "es" ? logo_es : logo_en} alt="Verde Agostini" />
          </div>
          <div className="PreHomeOptionText">
            <p>
              <FormattedMessage locale={this.props.lang} id="PreHomeOption.textOne" />
            </p>
            <p>
              <FormattedMessage locale={this.props.lang} id="PreHomeOption.textTwo" />
            </p>
            <p>
              <FormattedMessage locale={this.props.lang} id="PreHomeOption.textThree" />
            </p>
          </div>
          <div className="w-100 text-center mt-4">
            <Link to="/inicio" className="PreHomeOptionLink">
              <FormattedMessage locale={this.props.lang} id="prehome.enter" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    lang: state.locale.lang,
  };
}

export default connect(mapStateToProps)(PreHomeOption);
