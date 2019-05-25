import React from 'react';
// import queryString from 'querystring';
// import Constants from '../config';
// import isset from './utilities/isset';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import Loading from './Loading';
import * as actions from './../actions/locale';
import './styles/ContactForm.css';

class ContactForm extends React.Component {
    handleChange = e => {
        this.props.dispatch(actions.updateForm(
            {
                ...this.props.form,
                [e.target.name]: e.target.value
            }
        ));
    }
    handleSubmit = e => {
        if (e) e.preventDefault();
        this.props.dispatch(actions.sendFormAsync(this.props.form));
    }
    render() {
        return (
            <React.Fragment>
                <Loading loading={this.props.isLoading} />
                <form className="ContactForm form-horizontal mt-4" onSubmit={this.handleSubmit}>
                    <h4 className="heading">
                        <FormattedMessage locale={this.props.lang} id="contact.subtitleform" />
                    </h4>
                    <div className="form-group">
                        <div className="col-12">
                            <label className="control-label" htmlFor="inputName">
                                <FontAwesomeIcon icon="user" />
                            </label>
                            <FormattedMessage locale={this.props.lang} id="contact.form.name">
                                {
                                    placeholder =>
                                        <input
                                            onChange={this.handleChange}
                                            type="text"
                                            className={(this.props.showErrors && this.props.form.name === "") ? "form-control formInputError" : "form-control"}
                                            id="inputName"
                                            name="name"
                                            placeholder={placeholder}
                                            value={this.props.form.name} />
                                }
                            </FormattedMessage>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-12">
                            <label className="control-label" htmlFor="inputPhone">
                                <FontAwesomeIcon icon="phone" />
                            </label>
                            <FormattedMessage locale={this.props.lang} id="contact.form.phone" >
                                {
                                    placeholder =>
                                        <input
                                            onChange={this.handleChange}
                                            type="phone"
                                            className="form-control"
                                            id="inputPhone"
                                            name="phone"
                                            placeholder={placeholder}
                                            value={this.props.form.phone} />
                                }
                            </FormattedMessage>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-12">
                            <label className="control-label" htmlFor="inputEmail">
                                <FontAwesomeIcon icon="at" />
                            </label>
                            <FormattedMessage locale={this.props.lang} id="contact.form.email" >
                                {
                                    placeholder =>
                                        <input
                                            onChange={this.handleChange}
                                            type="email"
                                            className={(this.props.showErrors && this.props.form.email === "") ? "form-control formInputError" : "form-control"}
                                            id="inputEmail"
                                            name="email"
                                            placeholder={placeholder}
                                            value={this.props.form.email} />
                                }
                            </FormattedMessage>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-12">
                            <label className="control-label" htmlFor="inputMessage">
                                <FontAwesomeIcon icon="envelope" />
                            </label>
                            <FormattedMessage locale={this.props.lang} id="contact.form.message" >
                                {
                                    placeholder =>
                                        <textarea
                                            onChange={this.handleChange}
                                            className={(this.props.showErrors && this.props.form.message === "") ? "form-control formInputError" : "form-control"}
                                            id="inputMessage"
                                            name="message"
                                            placeholder={placeholder}
                                            rows="3"
                                            value={this.props.form.message} />
                                }
                            </FormattedMessage>
                        </div>
                    </div>
                    {
                        this.props.message.text !== '' && this.props.message.type === 'OK' &&
                        <p className="alert alert-info">{this.props.message.text}</p>
                    }
                    {
                        this.props.message.text !== '' && this.props.message.type === 'ERROR' &&
                        <p className="alert alert-danger">{this.props.message.text}</p>
                    }
                    <div className="d-flex justify-content-end">
                        <button
                            type="submit"
                            className="btn btn-success text-white">
                            <FormattedMessage locale={this.props.lang} id="contact.form.send" />
                        </button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        lang: state.locale.lang,
        ...state.contact
    }
}

export default connect(mapStateToProps)(ContactForm);