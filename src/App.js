import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import HandleError from './components/HandleError';
import PreHomeSaveMoney from './components/pages/PreHomeSaveMoney';
import PreHomeOption from './components/pages/PreHomeOption';
import PreHomeInvesment from './components/pages/PreHomeInvesment';
import Page from './components/pages/Page';
import Contact from './components/pages/Contact';
import AboutUs from './components/pages/AboutUs';
import Products from './components/pages/Products';
import Home from './components/Home';
import isset from './components/utilities/isset';
import * as actions from './actions/locale';
import messages from './lang';

const preHomes = {
    0: PreHomeSaveMoney,
    1: PreHomeOption,
    2: PreHomeInvesment
}

const randomCover = Math.floor(Math.random() * 3);

class App extends Component {
    componentDidMount = () => {
        if (this.props.lang !== this.props.langParam)
            this.props.dispatch(actions.localeSet(this.props.langParam));
    }
    render() {
        return (
            <HandleError>
                <IntlProvider locale={this.props.lang} messages={messages[this.props.lang]}>
                    <Switch>
                        <Page withLayOut={this.props.location !== "/"}>
                            <Route exact path="/" component={preHomes[randomCover]} />
                            <Route path="/inicio/:paramsLang?" component={Home} />
                            <Route path="/productos/:paramsLang?" component={Products} />
                            <Route path="/nosotros/:paramsLang?" component={AboutUs} />
                            <Route path="/contacto/:paramsLang?" component={Contact} />
                        </Page>
                    </Switch>
                </IntlProvider>
            </HandleError>
        );
    }
}

function mapStateToProps(state, props) {
    let elements = props.history.location.pathname.split("/");
    let langParam = state.locale.lang;
    if (isset(elements[2]) && (elements[2] === "es" || elements[2] === "en"))
        langParam = elements[2];
    return {
        lang: state.locale.lang,
        langParam,
        location: props.location.pathname
    }
}

export default withRouter(connect(mapStateToProps)(App));