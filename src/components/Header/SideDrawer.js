import React from 'react';
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
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/">Productos</Link></li>
                    <li><Link to="/">Nosotros</Link></li>
                    <li><Link to="/">Contacto</Link></li>
                </ul>
            </nav>
        )
    }
}

export default SideDrawer;