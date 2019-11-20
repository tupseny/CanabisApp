import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {withNamespaces} from "react-i18next";
import i18n from "../utils/i18n";
import {compose} from "redux";
import Navbar from "./Navbar";

export class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar />
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
