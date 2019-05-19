import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HandleError from './components/HandleError';
import PreHomeSaveMoney from './components/pages/PreHomeSaveMoney';
import PreHomeOption from './components/pages/PreHomeOption';
import Page from './components/pages/Page';
import Home from './components/Home';
import './components/styles/AppLayout.css';

const preHomes = {
  0: PreHomeSaveMoney,
  1: PreHomeOption,
  2: PreHomeSaveMoney
}

const randomCover = Math.floor(Math.random() * 3);

class App extends React.Component {
  render() {
    return (
      <Router basename="/">

        <HandleError>
          <Switch>
            <Route exact path="/" component={preHomes[randomCover]} />
            <Route path="/inicio" render={(props) => <Home />} />
            {/* <Route exact path="/contacto" component={Contact} /> */}
            {/* <Route exact path="/politica-de-cookies" component={CookiesPolicy} /> */}
          </Switch>
        </HandleError>
      </Router>
    );
  }
}

export default App;
