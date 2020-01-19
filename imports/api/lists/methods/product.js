import {Products} from "../lists";

export const findByTag = {
    name: 'products.findByTag',

    validate(args) {
        new SimpleSchema({
            tag: {type: String}
        }).validate(args)
    },

    run({tag}) {
        return Products.find({tags: tag}).fetch();
    },

    call(args, callback) {
        const options = {
            returnStubValue: true,
            throwStubExceptions: true
        };

        Meteor.apply(this.name, [args], options, callback)
    }
};