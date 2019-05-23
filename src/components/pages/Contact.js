import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Page from './../pages/Page';
import ContactForm from './../ContactForm';
import MyData from './../MyData';
import ContactImage from './../../assets/images/contact.jpg';
import './styles/Contact.css';

const Contact = (props) => (
    <Page>
        <div style={{ paddingTop: "100px" }}>
            <h1 className="text-center">
                <FormattedMessage locale={props.lang} id="contact.title" />
            </h1>
            <p className="text-center ContactSubtitle">
                <FormattedMessage locale={props.lang} id="contact.subtitle" />
            </p>
            <div className="row">
                <div className="col-lg-6 pl-0 pr-0">
                    <img src={ContactImage} alt="" className="w-100" />
                </div>
                <div className="col-lg-6 bg-white">
                    <MyData />
                </div>
            </div>
            <ContactForm />
        </div>
    </Page>
)


function mapStateToProps(state, props) {
    return {
        lang: state.locale.lang
    }
}

export default connect(mapStateToProps)(Contact);


