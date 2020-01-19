import {check} from 'meteor/check';
import {Products} from "./lists";
import {findByTag} from "./methods/product";

Meteor.methods({
    [findByTag.name]: function (args) {
        findByTag.validate.call(this, args);
        return findByTag.run.call(this, args);
    }
});
