import {Mongo} from 'meteor/mongo';

export const Products = new Mongo.Collection('products', {
    transform: (doc) => new ProductModel(doc)
});

export const Categories = new Mongo.Collection('categories');
