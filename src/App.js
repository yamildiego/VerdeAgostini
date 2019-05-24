import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import HandleError from './components/HandleError';
import PreHomeSaveMoney from './components/pages/PreHomeSaveMoney';
import PreHomeOption from './components/pages/PreHomeOption';
import PreHomeInvesment from './components/pages/PreHomeInvesment';
import Page from './components/pages/Page';
import Contact from './components/pages/Contact';
import Home from './components/Home';
import messages from './lang';
// import { CSSTransition } from 'react-transition-group';

const preHomes = {
    0: PreHomeSaveMoney,
    1: PreHomeOption,
    2: PreHomeInvesment
}

const randomCover = Math.floor(Math.random() * 3);

// const routes = [
//     { path: '/', withLayOut: false, Component: preHomes[randomCover] },
//     { path: '/inicio', withLayOut: true, Component: Home },
//     { path: '/contacto', withLayOut: true, Component: Contact },
// ]

class App extends Component {
    state = {}
    render() {
        return (
            <HandleError>
                <IntlProvider locale={this.props.lang} messages={messages[this.props.lang]}>
                    <Router basename="/">
                        <Switch>
                            {console.log(this.props)}
                            <Page withLayOut={true} >
                                <Route exact path="/" component={preHomes[randomCover]} />
                                <Route path="/inicio" component={Home} />
                                <Route path="/contacto" component={Contact} />
                            </Page>
                        </Switch>
                    </Router>
                </IntlProvider>
            </HandleError>
        );
    }
}

function mapStateToProps(state, props) {
    console.error(props)
    return {
        lang: state.locale.lang
    }
}

export default connect(mapStateToProps)(App)
