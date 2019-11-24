import * as React from "react";
import {Button, Form, FormControl} from "react-bootstrap";
import {withNamespaces} from "react-i18next";
import {NavigationBar} from "./Navbar";

export class SearchForm extends React.Component {
    render() {
        return (
            <Form inline className={'ml-auto'}>
                <FormControl type="text" placeholder={this.props.t('search')} className="mr-sm-2"/>
                <Button variant="outline-info">{this.props.t('search')}</Button>
            </Form>
        );
    }
}

export default withNamespaces()(SearchForm);