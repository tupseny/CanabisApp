import {Categories, Products} from "./collections";

if (Meteor.isServer) {
    Meteor.publish('products',  () => {
        return Products.find({});
    });

    Meteor.publish('categories',  () => {
        return Categories.find({});
    });
}
