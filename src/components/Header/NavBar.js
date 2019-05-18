import React from 'react';
import { Link } from "react-router-dom";
import DrawerToggleButton from './DrawerToggleButton';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/NavBar.css';
import Logo from './../../assets/images/logo.jpg';

class NavBar extends React.Component {
    state = {}
    render() {
        return (
            <header className="NavBar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-5 d-none d-lg-block d-xl-block">
                            <ul className="Menu">
                                <li className="MenuItem"><Link to="/">Inicio</Link></li>
                                <li className="MenuItem"><Link to="/">Servicios</Link></li>
                                <li className="MenuItem"><Link to="/">Nosotros</Link></li>
                                <li className="MenuItem"><Link to="/">Contacto</Link></li>
                            </ul>
                        </div>
                        <div className="NavBarBtnMenu col-lg-1 col-4 d-lg-none d-xl-none">
                            <DrawerToggleButton handleClickOpenMenu={this.props.handleClickOpenMenu} />
                        </div>
                        <div className="col-lg-2 col-4">
                            <Link to="/">
                                <img src={Logo} alt="Verde Agostini" />
                            </Link>
                        </div>
                        <div className="col-lg-5 col-4">

                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default NavBar;