import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import '/imports/utils/i18n'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "../imports/ui/pages/App";

Meteor.startup(() => {
    render(<App />, document.getElementById('react-target'));
});
