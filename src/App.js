import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import HandleError from './components/HandleError';
import PreHomeSaveMoney from './components/pages/PreHomeSaveMoney';
import PreHomeOption from './components/pages/PreHomeOption';
import PreHomeInvesment from './components/pages/PreHomeInvesment';
import Contact from './components/pages/Contact';
import Home from './components/Home';
import messages from './lang';
import { CSSTransition } from 'react-transition-group';

const preHomes = {
    0: PreHomeSaveMoney,
    1: PreHomeOption,
    2: PreHomeInvesment
}

const randomCover = Math.floor(Math.random() * 3);

const routes = [
    { path: '/', Component: preHomes[randomCover] },
    { path: '/inicio', Component: Home },
    { path: '/contacto', Component: Contact },
]

class App extends Component {
    state = {}
    render() {
        return (
            <HandleError>
                <IntlProvider locale={this.props.lang} messages={messages[this.props.lang]}>
                    <Router basename="/">
                        {routes.map(({ path, Component }) => (
                            <Route key={path} exact path={path}>
                                {({ match }) => (
                                    <CSSTransition
                                        in={match != null}
                                        timeout={300}
                                        classNames="page"
                                        unmountOnExit
                                    >
                                        <div className="page">
                                            <Component />
                                        </div>
                                    </CSSTransition>
                                )}
                            </Route>
                        ))}
                    </Router>
                </IntlProvider>
            </HandleError>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        lang: state.locale.lang
    }
}

export default connect(mapStateToProps)(App);