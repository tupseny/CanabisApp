import {Mongo} from 'meteor/mongo';
import {Product} from "../models/product";
import {Category} from "../models/category";

export const Products = new Mongo.Collection('products', {
    transform: (doc) => new Product(doc)
});

export const Categories = new Mongo.Collection('categories', {
    transform: (doc) => new Category(doc)
});
