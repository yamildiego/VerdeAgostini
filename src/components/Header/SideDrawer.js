import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from "react-router-dom";
import './styles/SideDrawer.css'

class SideDrawer extends React.PureComponent {
    render() {
        let drawerClasses = 'SideDrawer';
        if (this.props.sideDrawerOpen) {
            drawerClasses = 'SideDrawer SideDrawerOpen';
        }
        return (
            <nav className={drawerClasses}>
                <ul>
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
            </nav>
        )
    }
}

export default SideDrawer;