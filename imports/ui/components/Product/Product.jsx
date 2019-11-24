import ProductDescription from "./Product-descr";
import ProductPrice from "./Product-price";
import * as React from "react";

export interface ProductProps {

}

export class Product extends React.Component{
    static Description: typeof ProductDescription;
    static Price: typeof ProductPrice;
    static Name: typeof ProductName;

    render(){
        return <div />;
    }
}