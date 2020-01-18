import {Categories, Products} from "../lists";

if (Meteor.isServer) {
    Meteor.publish('products',  () => {
        return Products.find({});
    });

    Meteor.publish('categories',  () => {
        return Categories.find({});
    });
}
