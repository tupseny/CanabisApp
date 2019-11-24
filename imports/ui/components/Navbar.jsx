import React, {Component} from 'react';
import i18n from '/imports/utils/i18n'

import {withNamespaces} from "react-i18next";
import {ButtonGroup, Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import LanguagePanel from "./Language-panel";

export class NavigationBar extends Component {
    renderPanel() {
        return (
            <Navbar bg="light" expand="lg" className={'mb-5'}>
                <Navbar.Brand href="#home">{this.props.t('brand')}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className={'justify-content-between'}>
                    <Nav className="">
                        <Nav.Link href="#home">{this.props.t('to_home')}</Nav.Link>

                        <NavDropdown title={this.props.t('categories')} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <LanguagePanel />

                    <Form inline className={'ml-auto'}>
                        <FormControl type="text" placeholder={this.props.t('search')} className="mr-sm-2"/>
                        <Button variant="outline-success">{this.props.t('search')}</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }

    render() {
        return this.renderPanel();
    }
}

export default withNamespaces()(NavigationBar);
