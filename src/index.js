import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/fonts/fonts.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import * as serviceWorker from './serviceWorker';
import 'bootstrap';

import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

import {
    faTimes,
    faHome
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faTimes, faHome);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
