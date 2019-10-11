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
import isset from './components/utilities/isset';
import * as actions from './actions/locale';
import messages from './lang';
import es from 'react-intl/locale-data/es';
import en from 'react-intl/locale-data/en';

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
        if (this.props.lang !== this.props.langParam)
            this.props.dispatch(actions.localeSet(this.props.langParam));
    }
    render() {
        return (
            <HandleError>
                <IntlProvider locale={this.props.lang} messages={messages[this.props.lang]}>
                    <Switch>
                        <Route exact path="/" render={() => <MyComponent />} />
                        <Route path="/inicio/:paramsLang?" component={Home} />
                        <Route path="/productos/:paramsLang?" component={Products} />
                        <Route path="/nosotros/:paramsLang?" component={AboutUs} />
                        <Route path="/contacto/:paramsLang?" component={Contact} />
                        <Route path="/politica-de-cookies/:paramsLang?" component={CookiesPolicy} />
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