import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {withNamespaces} from "react-i18next";
import i18n from "../utils/i18n";
import {connect} from "react-redux";
import {useTranslation} from "react-i18next/hooks";
import {compose} from "redux";

export class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        function changeLanguage(lng) {
            i18n.changeLanguage(lng);
        }

        return (
            <div>
                <button onClick={() => changeLanguage('ru')}>ru</button>
                <button onClick={() => changeLanguage('en')}>en</button>
                <h1>{this.props.t('main-title')}</h1>
            </div>
        );
    }
}

export default compose(
    withNamespaces(),
    withTracker(() => {
        return {}
    })
)(App);
