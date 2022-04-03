import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo_es from "../../assets/images/logo_es.png";
import logo_en from "../../assets/images/logo_en.png";
import "./styles/PreHomeSaveMoney.css";

class PreHomeSaveMoney extends Component {
  render() {
    return (
      <div className="PreHomeSaveMoney">
        <div className="PreHomeSaveMoneyLogo">
          <img src={this.props.lang === "es" ? logo_es : logo_en} alt="Verde Agostini" />
        </div>
        <div className="PreHomeSaveMoneyText">
          <p>
            <FormattedMessage locale={this.props.lang} id="PreHomeSaveMoney.textOne" />
          </p>
          <p>
            <FormattedMessage locale={this.props.lang} id="PreHomeSaveMoney.textTwo" />
          </p>
        </div>
        <div className="PreHomeSaveMoneyEntry">
          <Link to="/inicio" className="PreHomeSaveMoneyLink">
            <FormattedMessage locale={this.props.lang} id="prehome.enter" />
          </Link>
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

export default connect(mapStateToProps)(PreHomeSaveMoney);
