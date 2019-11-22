import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {withNamespaces} from "react-i18next";
import {compose} from "redux";
import NavigationBar from "../components/Navbar";
import {ItemDetail} from "./Item-detail";
import {Products} from "../../api/collections/collections";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export class App extends Component {
    constructor(props) {
        super(props);
    }

    renderBody() {
        return (
            <div>
                <ItemDetail product={this.props.products}/>
            </div>
        )
    }

    render() {
        return (
            <div className={'h-100'}>
                <Header/>
                {this.renderBody()}
                <Footer />
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
