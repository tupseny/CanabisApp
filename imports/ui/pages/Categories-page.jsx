import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ItemCard} from "../components/Item-card";
import PropTypes from 'prop-types';


export class CategoriesPage extends React.Component {
    renderEl(elem, index) {
        return (
            <Col sm={6} md={4} className={'mb-3'}>
                <ItemCard image={elem.image} title={elem.title} subTitle={index + ' products'}/>
            </Col>
        );
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.props.list.map((value, index) => {
                        return this.renderEl(value, index)
                    })}
                </Row>
            </Container>
        );
    }
}

CategoriesPage.propTypes = {
    list: PropTypes.array.isRequired
};