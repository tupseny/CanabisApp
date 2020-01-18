import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {withNamespaces} from "react-i18next";
import {compose} from "redux";
import NavigationBar from "../components/Navbar";
import {ItemDetail} from "./Item-detail";
import {Categories, Products} from "../../api/lists/lists";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {CategoriesPage} from "./Categories-page";

export class App extends Component {
    constructor(props) {
        super(props);
    }

    renderBody() {
        return (
            <CategoriesPage list={this.props.categories}/>
        )
    }

    render() {
        return (
            <div className={'h-100'}>
                <Header/>
                {this.renderBody()}
                {/*<Footer />*/}
            </div>
        );
    }
}

export default compose(
    withNamespaces(),
    withTracker(() => {
        Meteor.subscribe('products');
        Meteor.subscribe('categories');

        return {
            products: Products.find({}).fetch(),
            categories: Categories.find({}).fetch()
        }
    })
)(App);
