import {Products} from "./collections";

if (Meteor.isServer) {
    Meteor.publish('products',  () => {
        return Products.find({});
    });
}
