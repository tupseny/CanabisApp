import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {withNamespaces} from "react-i18next";
import {compose} from "redux";
import NavigationBar from "../components/Navbar";
import {ItemDetail} from "./Item-detail";
import {Products} from "../../api/collections/collections";

export class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <ItemDetail product={this.props.products} />
            </div>
        );
    }
}

export default compose(
    withNamespaces(),
    withTracker(() => {
        Meteor.subscribe('products');

        return {
            products: Products.find({}).fetch()
        }
    })
)(App);
