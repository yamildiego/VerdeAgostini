import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AlertCookies from './components/AlertCookies';
import HandleError from './components/HandleError';
import Home from './components/Home';
import Header from './components/Header/Header';

import './components/styles/AppLayout.css';

class App extends React.Component {
  render() {
    return (
      <Router basename="/">
        <Header />
        <AlertCookies />
        <HandleError>
          <Switch>
            <Route exact path="/" component={Home} />} />
            {/* <Route exact path="/medios-de-pago" component={PaymentMethods} /> */}
            {/* <Route exact path="/contacto" component={Contact} /> */}
            {/* <Route exact path="/politica-de-cookies" component={CookiesPolicy} /> */}
          </Switch>
        </HandleError>
      </Router>

    );
  }
}

export default App;
