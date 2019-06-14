import React from 'react';
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import rootReducers from './reducers/rootReducers';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './assets/fonts/fonts.css';

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <Router basename="/">
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();