import React, { Component } from 'react';
import Header from './../Header/Header';
import AlertCookies from './../AlertCookies';
import Footer from './../Footer';

class Page extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Header />
                <AlertCookies />
                {this.props.children}
                <Footer />
            </React.Fragment>
        );
    }
}

export default Page;