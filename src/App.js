import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import HandleError from './components/HandleError';
import PreHomeSaveMoney from './components/pages/PreHomeSaveMoney';
import PreHomeOption from './components/pages/PreHomeOption';
import Contact from './components/pages/Contact';
import Home from './components/Home';
import messages from './lang';

const preHomes = {
    0: PreHomeSaveMoney,
    1: PreHomeOption,
    2: PreHomeSaveMoney
}

const randomCover = Math.floor(Math.random() * 3);

class App extends Component {
    state = {}
    render() {
        return (
            <HandleError>
                <IntlProvider locale={this.props.lang} messages={messages[this.props.lang]}>
                    <Router basename="/">
                        <Switch>
                            <Route exact path="/" component={preHomes[randomCover]} />
                            <Route path="/inicio" render={(props) => <Home />} />
                            <Route exact path="/contacto" component={Contact} />
                            {/* <Route exact path="/politica-de-cookies" component={CookiesPolicy} /> */}
                        </Switch>
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