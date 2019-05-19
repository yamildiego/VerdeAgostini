import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/locale';
import './styles/ChangeLanguage.css';

class ChangeLanguage extends React.PureComponent {
    handleLocaleSet = (lang) => {
        this.props.dispatch(actions.localeSet(lang));
    }
    render() {
        return (
            <div className="change-language">
                <div>{this.props.lang}</div>
                <button type="button" onClick={() => this.handleLocaleSet("en")}>English</button>|
                <button type="button" onClick={() => this.handleLocaleSet("es")}>Español</button>|
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