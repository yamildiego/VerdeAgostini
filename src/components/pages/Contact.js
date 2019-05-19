import React from 'react';
import Page from './../pages/Page';
import ContactForm from './../ContactForm';
import './styles/Contact.css';

const Contact = () => (
    <Page>
        <div className="container Contact">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <div className="ContactPage">
                        <h1>Contacto</h1>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    </Page>
)

export default Contact;