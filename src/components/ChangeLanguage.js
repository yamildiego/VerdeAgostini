import React from 'react';
import localforage from 'localforage';
import { connect } from 'react-redux';
import * as actions from '../actions/locale';
import './styles/ChangeLanguage.css';

class ChangeLanguage extends React.PureComponent {
    handleLocaleSet = (lang) => {
        localforage.setItem('lang', lang);
        this.props.dispatch(actions.localeSet(lang))
    }
    render() {
        return (
            <div className={this.props.className ? ("ChangeLanguage " + this.props.className) : "ChangeLanguage"}>
                {
                    this.props.lang === "en" &&
                    <span className={(this.props.isTop ? "ChangeLanguageTop" : "ChangeLanguageFix")} onClick={() => this.handleLocaleSet("es")} >Español</span>
                }
                {
                    this.props.lang === "es" &&
                    <span className={(this.props.isTop ? "ChangeLanguageTop" : "ChangeLanguageFix")} onClick={() => this.handleLocaleSet("en")} >English</span>
                }
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        lang: state.locale.lang
    }
}

export default connect(mapStateToProps)(ChangeLanguage);