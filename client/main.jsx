import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';

import '/imports/utils/i18n'

import App from "../imports/ui/App";

Meteor.startup(() => {
    render(<App />, document.getElementById('react-target'));
});
