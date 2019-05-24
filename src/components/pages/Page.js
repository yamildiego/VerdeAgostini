import React, { Component } from 'react';
import Header from './../Header/Header';
import AlertCookies from './../AlertCookies';
import Footer from './../Footer';

class Page extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.withLayOut &&
                    <Header />
                }
                {
                    this.props.withLayOut &&
                    <AlertCookies />
                }
                {this.props.children}
                {
                    this.props.withLayOut &&
                    <Footer />
                }
            </React.Fragment>
        );
    }
}

export default Page;