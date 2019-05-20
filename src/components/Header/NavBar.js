import React from 'react';
import { Link } from "react-router-dom";
import DrawerToggleButton from './DrawerToggleButton';
import ChangeLanguage from './../ChangeLanguage';
import { FormattedMessage } from 'react-intl';
import Logo from './../../assets/images/logox500.fw.png';
import { connect } from 'react-redux';
import './styles/NavBar.css';

class NavBar extends React.Component {
    state = { isTop: true }
    componentDidMount = () => {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) this.setState({ isTop })
        });
    }
    render() {
        return (
            <header className={(this.state.isTop ? "NavBar NavBarTop position-fixed w-100" : "NavBar NavBarFix position-fixed w-100 bg-white")}>
                <div className="container-fluid">
                    <div className="NavBarMenu">
                        <div className="row">
                            <div className="NavBarBtnMenu col-lg-1 col-4 d-lg-none d-xl-none">
                                <DrawerToggleButton handleClickOpenMenu={this.props.handleClickOpenMenu} />
                            </div>
                            <div className="col-lg-2 col-4 text-center">
                                <div className="LogoMenu">
                                    <Link to="/">
                                        <img src={Logo} alt="Verde Agostini" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-5 col-4"></div>
                            <div className="col-5 d-none d-lg-block d-xl-block">
                                <ul className="Menu">
                                    <li>
                                        <Link to="/inicio">
                                            <FormattedMessage locale={this.props.lang} id="nav.home" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/servicios">
                                            <FormattedMessage locale={this.props.lang} id="nav.service" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/nosotros">
                                            <FormattedMessage locale={this.props.lang} id="nav.about" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contacto">
                                            <FormattedMessage locale={this.props.lang} id="nav.contact" />
                                        </Link>
                                    </li>
                                </ul>
                                <ChangeLanguage isTop={this.state.isTop} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default connect()(NavBar);