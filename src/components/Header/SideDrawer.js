import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import './styles/SideDrawer.css'

class SideDrawer extends React.PureComponent {
    handleClick = () => {
        window.scrollTo(0, 0);
        this.props.handleClickCloseMenu();
    }
    render() {
        let drawerClasses = 'SideDrawer';
        if (this.props.sideDrawerOpen) {
            drawerClasses = 'SideDrawer SideDrawerOpen';
        }
        return (
            <nav className={drawerClasses}>
                <ul>
                    <li>
                        <Link to={(this.props.lang === "es") ? `/inicio` : `/inicio`} onClick={this.handleClick}>
                            <FormattedMessage locale={this.props.lang} id="nav.home" />
                        </Link>
                    </li>
                    <li>
                        <Link to={(this.props.lang === "es") ? `/productos` : `/productos`} onClick={this.handleClick}>
                            <FormattedMessage locale={this.props.lang} id="nav.products" />
                        </Link>
                    </li>
                    <li>
                        <Link to={(this.props.lang === "es") ? `/nosotros` : `/nosotros`} onClick={this.handleClick}>
                            <FormattedMessage locale={this.props.lang} id="nav.about" />
                        </Link>
                    </li>
                    <li>
                        <Link to={(this.props.lang === "es") ? `/contacto` : `/contacto`} onClick={this.handleClick}>
                            <FormattedMessage locale={this.props.lang} id="nav.contact" />
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}


function mapStateToProps(state, props) {
    return {
        lang: state.locale.lang
    }
}

export default connect(mapStateToProps)(SideDrawer);