import React, { Component } from "react";
import Header from "./../Header/Header";
import Footer from "./../Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faWhatsapp, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faTimes,
  faHome,
  faCheck,
  faSpinner,
  faUser,
  faPhone,
  faEnvelope,
  faAt,
  faMapMarkerAlt,
  faHandHoldingUsd,
  faReceipt,
  faTemperatureHigh,
  faSun,
  faVial,
  faVolumeMute,
  faFileAlt,
  faHeart,
  faCommentDollar,
  faCloudShowersHeavy,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faWhatsapp,
  faFacebookF,
  faInstagram,
  faTimes,
  faHome,
  faCheck,
  faSpinner,
  faUser,
  faPhone,
  faEnvelope,
  faAt,
  faMapMarkerAlt,
  faHandHoldingUsd,
  faReceipt,
  faTemperatureHigh,
  faSun,
  faVial,
  faVolumeMute,
  faFileAlt,
  faHeart,
  faCommentDollar,
  faCloudShowersHeavy
);

class Page extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Page;
