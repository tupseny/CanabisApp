import { check } from 'meteor/check';
import {Products} from "./lists";

Meteor.methods({
    'products.insert'(title, description) {
        check(title, String);
        check(description, String);

        Products.insert({
            title,
            description
        })
    }
});
