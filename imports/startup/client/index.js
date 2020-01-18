// @flow
import '/imports/utils/i18n'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Meteor} from "meteor/meteor";
import {render} from "react-dom";
import App from "/imports/ui/pages/App";
import React from "react";

Meteor.startup(() => {
    render(<App/>, document.getElementById('react-target'));
});