import React from 'react';
import './styles/Backdrop.css';

class Backdrop extends React.PureComponent {
    render() {
        return (
            <div className="backdrop" onClick={this.props.handleClickCloseMenu} />
        )
    }
}
export default Backdrop