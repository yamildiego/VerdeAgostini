import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import Loadable from 'react-loadable';
import HandleError from './components/HandleError';
import Contact from './components/pages/Contact';
import AboutUs from './components/pages/AboutUs';
import Products from './components/pages/Products';
import CookiesPolicy from './components/pages/CookiesPolicy';
import Home from './components/Home';
import * as actions from './actions/locale';
import messages from './lang';
import es from 'react-intl/locale-data/es';
import en from 'react-intl/locale-data/en';
import lenguanges from './lang';
import localforage from 'localforage';

addLocaleData([...en, ...es])

const preHomes = {
    0: './components/pages/PreHomeSaveMoney',
    1: './components/pages/PreHomeOption',
    2: './components/pages/PreHomeFreeEnergy'
}
const randomCover = Math.floor(Math.random() * 3);

let MyComponent = Loadable({
    loader: () => import(`${preHomes[randomCover]}`),
    loading: () => <div>Loading...</div>
});

class App extends Component {
    componentDidMount = () => {
        localforage.getItem('lang', (err, langLocalForage) => {
            let lang = "en";
            if (langLocalForage == null) {
                let navigatorLanguage = navigator.language.split("-")[0];
                if (navigatorLanguage !== undefined && Object.keys(lenguanges).includes(navigatorLanguage))
                    lang = navigatorLanguage;
            } else
                if (Object.keys(lenguanges).includes(langLocalForage)) lang = langLocalForage;

            this.props.dispatch(actions.localeSet(lang))
        });
    }
    render() {
        return (
            <HandleError>
                <IntlProvider locale={this.props.lang} messages={messages[this.props.lang]}>
                    <Switch>
                        <Route exact path="/" render={() => <MyComponent />} />
                        <Route path="/inicio" component={Home} />
                        <Route path="/productos" component={Products} />
                        <Route path="/nosotros" component={AboutUs} />
                        <Route path="/contacto" component={Contact} />
                        <Route path="/politica-de-cookies" component={CookiesPolicy} />
                    </Switch>
                </IntlProvider>
            </HandleError>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        lang: state.locale.lang,
        location: props.location.pathname
    }
}

export default withRouter(connect(mapStateToProps)(App));