import React from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

import { Link } from "react-router-dom";
import localforage from "localforage";

class AlertCookies extends React.Component {
  state = { acceptCookies: true };
  componentDidMount = () => {
    var _this = this;
    localforage.getItem("acceptCookies", (err, value) => _this.setState({ acceptCookies: value === true }));
  };

  handleClick = () => {
    localforage.setItem("acceptCookies", true);
    this.setState({ acceptCookies: true });
  };

  render() {
    return (
      <React.Fragment>
        {!this.state.acceptCookies && (
          <div style={styles.container}>
            <FormattedMessage id="general.cookies.description" />
            <Link style={styles.link} to={this.props.lang === "es" ? "/politica-de-cookies" : "/cookies-policy"}>
              {" "}
              <FormattedMessage id="general.cookies.policy" />.
            </Link>
            <div className="text-center mt-2">
              <button onClick={this.handleClick} className="btn btn-outline-light" type="button">
                <FormattedMessage id="general.cookies.btn" />.
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const styles = {
  container: {
    fontSize: 14,
    position: "fixed",
    bottom: "2rem",
    zIndex: 20,
    width: "400px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#1c232a",
    color: "#fff",
    padding: "15px",
  },
};

function mapStateToProps(state, props) {
  return {
    lang: state.locale.lang,
  };
}

export default connect(mapStateToProps)(AlertCookies);
