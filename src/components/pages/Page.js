import React, { Component } from 'react';
import Header from './../Header/Header';
import AlertCookies from './../AlertCookies';

class Page extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Header />
                <AlertCookies />
                {this.props.children}
            </React.Fragment>
        );
    }
}

export default Page;