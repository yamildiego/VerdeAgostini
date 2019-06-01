import React from 'react';
import { Link } from "react-router-dom";
import DrawerToggleButton from './DrawerToggleButton';
import ChangeLanguage from './../ChangeLanguage';
import { FormattedMessage } from 'react-intl';
import Logo from './../../assets/images/logo.png';
import { connect } from 'react-redux';
import './styles/NavBar.css';

class NavBar extends React.Component {
    state = { isTop: true }
    componentDidMount = () => {
        document.addEventListener('scroll', this.checkScroll);
    }
    componentWillUnmount = () => {
        document.removeEventListener('scroll', this.checkScroll);
    }
    checkScroll = () => {
        const isTop = window.scrollY < 30;
        if (isTop !== this.state.isTop) this.setState({ isTop })
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
                            <div className="col-lg-5 col-4">
                                <ChangeLanguage className="d-block d-lg-none" isTop={this.state.isTop} />
                            </div>
                            <div className="col-5 d-none d-lg-block d-xl-block">
                                <ul className="Menu">
                                    <li>
                                        <Link to={(this.props.lang === "es") ? `/inicio` : `/inicio/${this.props.lang}`}>
                                            <FormattedMessage locale={this.props.lang} id="nav.home" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={(this.props.lang === "es") ? `/productos` : `/productos/${this.props.lang}`}>
                                            <FormattedMessage locale={this.props.lang} id="nav.products" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={(this.props.lang === "es") ? `/nosotros` : `/nosotros/${this.props.lang}`}>
                                            <FormattedMessage locale={this.props.lang} id="nav.about" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={(this.props.lang === "es") ? `/contacto` : `/contacto/${this.props.lang}`}>
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

function mapStateToProps(state, props) {
    return {
        lang: state.locale.lang
    }
}

export default connect(mapStateToProps)(NavBar);