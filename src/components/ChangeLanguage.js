import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/locale';
import English from '../assets/images/en.png';
import Spanish from '../assets/images/es.png';
import './styles/ChangeLanguage.css';

class ChangeLanguage extends React.PureComponent {
    handleLocaleSet = (lang) => {
        this.props.dispatch(actions.localeSet(lang));
    }
    render() {
        return (
            <div className="change-language">
                {
                    this.props.lang == "en" &&
                    <span className={(this.props.isTop ? "ChangeLanguageTop" : "ChangeLanguageFix")} onClick={() => this.handleLocaleSet("es")} >Español</span>
                    // <img src={Spanish} alt="" />
                }
                {
                    this.props.lang == "es" &&
                    <span className={(this.props.isTop ? "ChangeLanguageTop" : "ChangeLanguageFix")} onClick={() => this.handleLocaleSet("en")} >English</span>
                    // <img src={English} alt="" />
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

export default connect(mapStateToProps)(ChangeLanguage)