import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './index.css';
import './assets/fonts/fonts.css';
// import data from './data.json';

import 'bootstrap';
// import "../node_modules/slick-carousel/slick/slick.css";
// import "../node_modules/slick-carousel/slick/slick-theme.css";

import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData } from 'react-intl';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import es from 'react-intl/locale-data/es';
import en from 'react-intl/locale-data/en';
import App from './App';
import rootReducers from './reducers/rootReducers';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faTimes, faHome,
    faCheck, faSpinner
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faSpinner, faCheck, faHome, faTimes);
addLocaleData([...en, ...es])

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
