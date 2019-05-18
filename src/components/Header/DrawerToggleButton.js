import React from 'react';
import './styles/DrawerToggleButton.css';

class DrawerToggleButton extends React.PureComponent {
    render() {
        return (
            <button className="toggle-button" onClick={this.props.handleClickOpenMenu}>
                <div className="toggle-button-line"></div>
                <div className="toggle-button-line"></div>
                <div className="toggle-button-line"></div>
            </button>
        )
    }
}

export default DrawerToggleButton;