import React from 'react';
import { Link } from "react-router-dom";
import localforage from 'localforage';
import './styles/AlertCookies.css';

class AlertCookies extends React.Component {
    state = { acceptCookies: true }
    componentDidMount = () => {
        var _this = this;
        localforage.getItem('acceptCookies', function (err, value) {
            _this.setState({ acceptCookies: value === true });
        });
    }
    handleClick = () => {
        localforage.setItem('acceptCookies', true);
        this.setState({ acceptCookies: true });
    }
    render() {
        return (
            <React.Fragment>
                {!this.state.acceptCookies &&
                    <div className="AlertCookies">
                        Utilizamos cookies propias y de terceros para mejorar la experiencia del usuario a través de su navegación.
                        Si continúas navegando aceptas su uso.
                        <Link className="link" to="/politica-de-cookies">Política de cookies</Link>
                        <div className="text-center mt-2">
                            <button onClick={this.handleClick} className="btn btn-outline-light" type="button">Aceptar</button>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}
export default AlertCookies;