import React from 'react';
// import queryString from 'querystring';
// import Constants from '../config';
// import isset from './utilities/isset';
import Loading from './Loading';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import * as actions from './../actions/locale';

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
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="inputName"><span className="required">(*)</span>
                            <FormattedMessage locale={this.props.lang} id="form.name" />
                        </label>
                        <FormattedMessage locale={this.props.lang} id="form.name">
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
                    <div className="form-group">
                        <label htmlFor="inputPhone">
                            <FormattedMessage locale={this.props.lang} id="form.phone" />
                        </label>
                        <FormattedMessage locale={this.props.lang} id="form.phone" >
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
                    <div className="form-group">
                        <label htmlFor="inputEmail"><span className="required">(*)</span>
                            <FormattedMessage locale={this.props.lang} id="form.email" />
                        </label>
                        <FormattedMessage locale={this.props.lang} id="form.email" >
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
                    <div className="form-group">
                        <label htmlFor="inputMessage"><span className="required">(*)</span>
                            <FormattedMessage locale={this.props.lang} id="form.message" />
                        </label>
                        <FormattedMessage locale={this.props.lang} id="form.message" >
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
                    {
                        this.props.message.text !== '' && this.props.message.type === 'OK' &&
                        <p className="alert alert-info">{this.props.message.text}</p>
                    }
                    {
                        this.props.message.text !== '' && this.props.message.type === 'ERROR' &&
                        <p className="alert alert-danger">{this.props.message.text}</p>
                    }
                    <button
                        type="submit"
                        className="btn btn-primary">
                        <FormattedMessage locale={this.props.lang} id="form.send" />
                    </button>
                </form>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        ...state.contact
    }
}

export default connect(mapStateToProps)(ContactForm);