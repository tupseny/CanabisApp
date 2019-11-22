import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {withNamespaces} from "react-i18next";
import {compose} from "redux";
import NavigationBar from "../components/Navbar";
import {ItemDetail} from "./Item-detail";

export class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <ItemDetail />
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
